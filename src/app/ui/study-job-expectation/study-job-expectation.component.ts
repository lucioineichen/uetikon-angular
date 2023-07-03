import { Component, Input } from '@angular/core'
import { IStudyJobExpectation } from 'src/app/interfaces'

@Component({
  selector: 'app-study-job-expectation[studyJobExpectation]',
  template: `
    <mat-card>
      <mat-card-header>
        {{ studyJobExpectation.name }}
      </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item
            *ngFor="let competence of studyJobExpectation.competences21"
          >
            {{ competence }}
          </mat-list-item>
        </mat-list>
        <div *ngIf="studyJobExpectation.mandatoryStudyJob">
          {{
            studyJobExpectation.mandatoryStudyJob.repositoryName +
              ':' +
              studyJobExpectation.mandatoryStudyJob.version
          }}
        </div>
        <div *ngIf="studyJobExpectation.studyJobChoices.length > 0">
          <div *ngFor="let job of studyJobExpectation.studyJobChoices">
            {{ job.version }}
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class StudyJobExpectationComponent {
  @Input() studyJobExpectation!: IStudyJobExpectation
}
