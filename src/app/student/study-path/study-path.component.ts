import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { StudyPathService } from './study-path.service'
import { BehaviorSubject } from 'rxjs'
import { IStudyPath } from 'src/app/teacher/study-path/study-path.service'

@Component({
  selector: 'app-study-path',
  template: `
    <mat-card class="mat-typography" style="width: 100%">
      <mat-card-header>
        <mat-card-title-group>
          <mat-card-title>LernWeg</mat-card-title>
          <mat-card-subtitle>Kompetenzen und LernJobs</mat-card-subtitle>
        </mat-card-title-group>
      </mat-card-header>
      <mat-card-content>
        <div *ngIf="path$ | async as path; else error">
          <div
            style="padding: 30px 0"
            fxLayout="row"
            *ngIf="
              path.competences.length > 0 || path.jobs.length > 0;
              else noJobs
            "
          >
            <div *ngIf="path.jobs.length > 0" style="padding-right: 100px">
              <h2 style="font-size: 17px; margin-bottom: 0px">LernJobs:</h2>
              <mat-list>
                <mat-list-item
                  *ngFor="let job of path.jobs"
                  class="job"
                  (click)="navigateToJob(job)"
                >
                  {{ job.name }}
                </mat-list-item>
              </mat-list>
            </div>

            <div *ngIf="path.competences.length > 0">
              <h2 style="font-size: 17px; margin-bottom: 0px">Kompetenzen:</h2>
              <mat-list>
                <mat-list-item *ngFor="let competence of path.competences">
                  {{ competence.name }}
                </mat-list-item>
              </mat-list>
            </div>
          </div>

          <ng-template #noJobs>
            <div>Der Lernweg ist noch leer</div>
          </ng-template>
        </div>

        <ng-template #error>
          <div style="margin-bottom: 20px">
            Lern Pfad konnte nicht geladen werden, lade die Seite neu
          </div>
        </ng-template>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class StudyPathComponent {
  path$: BehaviorSubject<IStudyPath | undefined>
  id: number

  constructor(
    private studyPathservice: StudyPathService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id']
    this.path$ = this.studyPathservice.path$
  }

  ngOnInit(): void {
    this.studyPathservice.updatePath(this.id)
  }

  navigateToJob(job: IStudyJob) {
    this.router.navigate(['teacher', 'study-jobs', job._id], {
      queryParams: {
        name: job.name,
      },
    })
  }
}
