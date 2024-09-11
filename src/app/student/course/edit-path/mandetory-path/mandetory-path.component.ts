import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { catchError, map, mergeMap, of, tap } from 'rxjs'
import { PlanDateService } from 'src/app/shared/ui/plan-date/plan-date.service'
import { IContainerPath, IStudyJob } from 'src/app/shared/utils/interfaces'
import { MandetoryPathService } from './mandetory-path.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from 'src/app/core/auth/auth.service'

@Component({
  selector: 'app-mandetory-path [path]',
  template: `
    <mat-card class="container">
      <mat-card-header>
        <mat-card-title>{{ job.name }}</mat-card-title>
        <mat-card-subtitle>Obligatorischer LernJob</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <button mat-icon-button class="edit-path" [mat-menu-trigger-for]="menu">
          <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" xPosition="before">
          <button mat-menu-item (click)="addDeadline()">
            <span>Datum Festlegen</span>
          </button>
        </mat-menu>

        <div style="height: 40px;"></div>
        <mat-chip class="chip" *ngIf="!path.isMet">Nicht Geplant</mat-chip>
        <mat-chip class="chip" *ngIf="path.isMet">
          {{ path.selections[0].deadline | date }}
        </mat-chip>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .chip {
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: default;
      }

      .edit-path {
        position: absolute;
        right: 5px;
        top: 5px;
      }

      .container {
        width: 350px;
      }
    `,
  ],
})
export class MandetoryPathComponent implements OnInit {
  @Input() path!: IContainerPath
  @Output() update = new EventEmitter<true>()
  job!: IStudyJob

  constructor(
    private planDate: PlanDateService,
    private service: MandetoryPathService,
    private ui: DialogService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.job = this.path.container.mandetoryJob
  }

  addDeadline() {
    // proably because this is undefined inside seTimeout
    setTimeout(() => {
      this.planDate
        .planDate()
        .pipe(
          filterNullish(),
          map((date) => {
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const day = String(date.getDate()).padStart(2, '0')
            const formattedDate = `${year}-${month}-${day}`
            return formattedDate
          }),
          mergeMap((date) => {
            if (this.path.selections.length > 0)
              return this.service.putPath(this.path.selections[0]._id, date)

            return this.service.postJobSelection(
              this.path.container._id,
              this.route.snapshot.params['studentId'] ||
                this.auth.currentUser$.value._id,
              date
            )
          }),
          tap(() => this.update.emit(true)),
          catchError((err) => {
            this.ui.showToast('Datum konnte nicht geändert werden')
            return err
          })
        )
        .subscribe()
    }, 0)
  }
}
