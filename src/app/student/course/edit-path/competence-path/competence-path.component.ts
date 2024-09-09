import { Component, Input } from '@angular/core'
import { IContainerPath } from 'src/app/shared/utils/interfaces'
import { ChoicePathService } from '../choice-path/choice-path.service'
import { AddCompetencePathService } from './add-competence-path/add-competence-path.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { mergeMap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-competence-path [path]',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ path.container.name | titlecase }}</mat-card-title>
        <mat-card-subtitle>LernJob Frei Nach Kompetenzen</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <button mat-icon-button class="edit-path" [mat-menu-trigger-for]="menu">
          <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu" xPosition="before">
          <button mat-menu-item (click)="addSel()">
            <span>Job Hinzufügen</span>
          </button>
        </mat-menu>
        <div style="height: 10px"></div>
        <div
          style="height: 30px;"
          *ngIf="path.missingCompetences.length == 0"
        ></div>
        <div style="margin-bottom: 10px;" *ngIf="path.selections.length > 0">
          <mat-chip class="chip" *ngFor="let sel of path.selections">
            {{ sel.studyJob.name }} | {{ sel.deadline | date }}
          </mat-chip>
        </div>
        <mat-list *ngIf="path.missingCompetences.length > 0">
          <div mat-sub-header>Fehlende Kompetenzen:</div>
          <mat-list-item *ngFor="let comp of path.missingCompetences">
            <span matListItemLine
              ><span [matTooltip]="comp.subject.name"
                >Fach: {{ comp.subject.short }}</span
              ></span
            >
            <span matListItemLine>Thema: {{ comp.topic.name }} </span>
            <span matListItemLine [matTooltip]="comp.name">
              Kompetenz: {{ comp.name }}
            </span>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .not-met-competence {
        border-color: red;
      }

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
export class CompetencePathComponent {
  @Input() path!: IContainerPath

  constructor(
    private service: ChoicePathService,
    private ui: DialogService,
    private addCompetencePath: AddCompetencePathService
  ) {}

  addSel() {
    setTimeout(() => this._addSel(), 0)
  }

  private _addSel() {
    this.addCompetencePath
      .addSel()
      .pipe(
        filterNullish(),
        mergeMap((data) =>
          this.service.postJobSelection(
            this.path.container._id,
            data.deadline,
            data.job
          )
        )
      )
      .subscribe()
  }
}
