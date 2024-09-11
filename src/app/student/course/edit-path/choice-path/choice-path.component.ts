import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PlanDateService } from 'src/app/shared/ui/plan-date/plan-date.service'
import { IContainerPath, IStudyJob } from 'src/app/shared/utils/interfaces'
import { ChoicePathService } from './choice-path.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { catchError, map, merge, mergeMap, tap } from 'rxjs'
import { SelectJobService } from './select-job/select-job.service'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from 'src/app/core/auth/auth.service'

@Component({
  selector: 'app-choice-path [path]',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ path.container.name }}</mat-card-title>
        <mat-card-subtitle>LernJob Auswahl</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <button mat-icon-button class="edit-path" [mat-menu-trigger-for]="menu">
          <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" xPosition="before">
          <button mat-menu-item (click)="selectJob()">
            <span>Job Auswählen</span>
          </button>
          <button
            [disabled]="!path.isMet"
            mat-menu-item
            (click)="addDeadline()"
          >
            <span>Datum Festlegen</span>
          </button>
        </mat-menu>

        <div style="height: 40px;"></div>

        <mat-chip-option
          [selected]="path.isMet && path.selections[0].studyJob._id == job._id"
          [selectable]="false"
          class="chip"
          *ngFor="let job of path.container.jobChoices"
          [matTooltip]="
            job.credits +
            ' Credits, ' +
            job.competences.length +
            ' Kompetenzen, ' +
            job.tasks.length +
            ' Aufgaben'
          "
        >
          <span
            *ngIf="!path.isMet || path.selections[0].studyJob._id != job._id"
            >{{ job.name }}</span
          >
          <span *ngIf="path.isMet && path.selections[0].studyJob._id == job._id"
            >{{ job.name }} | {{ path.selections[0].deadline | date }}</span
          >
        </mat-chip-option>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .chip {
        margin-right: 5px;
        margin-bottom: 5px;
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
export class ChoicePathComponent {
  @Input() path!: IContainerPath
  @Output() update = new EventEmitter<true>()

  constructor(
    private planDate: PlanDateService,
    private service: ChoicePathService,
    private ui: DialogService,
    private selectJobService: SelectJobService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  selectJob() {
    setTimeout(() => this._selectJob(), 0)
  }

  private _selectJob() {
    if (this.path.isMet) {
      this.selectJobService
        .selectJob(
          this.path.container.jobChoices,
          this.path.selections[0].studyJob._id,
          this.path.selections[0].deadline
        )
        .pipe(
          filterNullish(),
          mergeMap((data) =>
            this.service.putPath(
              this.path.selections[0]._id,
              data.deadline,
              data.job
            )
          ),
          tap(() => this.update.emit(true)),

          catchError((err) => {
            this.ui.showToast('Konnte nicht Updaten')
            return err
          })
        )
        .subscribe()
    } else {
      this.selectJobService
        .selectJob(this.path.container.jobChoices)
        .pipe(
          filterNullish(),
          mergeMap((data) =>
            this.service.postJobSelection(
              this.path.container._id,
              this.route.snapshot.params['studentId'] ||
                this.auth.currentUser$.value._id,
              data.deadline,
              data.job
            )
          ),
          tap(() => this.update.emit(true)),

          catchError((err) => {
            this.ui.showToast('Konnte nicht Updaten')
            return err
          })
        )
        .subscribe()
    }
  }

  addDeadline() {
    setTimeout(() => {
      this._addDeadline()
    }, 0)
  }

  private _addDeadline() {
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
  }
}
