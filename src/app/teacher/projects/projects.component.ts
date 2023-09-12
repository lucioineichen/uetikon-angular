import { Component, OnInit } from '@angular/core'
import { ProjectService } from './project.service'
import { BehaviorSubject, tap } from 'rxjs'
import { ICourse, IStudent, IStudyJob } from 'src/app/interfaces'

@Component({
  selector: 'app-projects',
  template: `
    <div style="position: absolute; right: 0; padding: 16px">
      <button
        mat-mini-fab
        matTooltip="Projekt Erstellen"
        aria-label="Projekt Erstellen"
        color="primary"
        (click)="createProject()"
      >
        <mat-icon>add</mat-icon>
      </button>
    </div>

    <!-- content -->
    <div *ngIf="!projects$.hasError">
      <div *ngIf="projects$ | async as projects; else loading">
        <div *ngIf="projects.length; else noprojects" style="padding: 40px">
          <mat-grid-list cols="4" rowHeight="340px">
            <mat-grid-tile *ngFor="let project of projects"
              ><mat-card
                (click)="service.openProject(project)"
                class="project"
                mat-ripple
              >
                <div style="width: 250px; padding: 20px 40px">
                  <mat-card-header>
                    <mat-card-title>{{ project.name }}</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <div>
                      {{ project.jobCourses.length }}
                      <mat-icon>menu_book</mat-icon>
                    </div>
                    <div>
                      {{ project.students.length }}
                      <mat-icon svgIcon="student"></mat-icon>
                    </div>
                  </mat-card-content>
                </div> </mat-card
            ></mat-grid-tile>
          </mat-grid-list>
        </div>

        <ng-template #noprojects>Es gibt noch keine Kurse</ng-template>
      </div>
    </div>

    <ng-template #loading> Lädt Kurse...</ng-template>

    <div *ngIf="projects$.hasError">
      Kurse konnten nicht geladen werden, lade die Seite neu
    </div>
  `,
  styles: [
    `
      .project:hover {
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition: all 200ms ease;
      }
    `,
    `
      .project {
      }
    `,
  ],
})
export class ProjectsComponent implements OnInit {
  projects$: BehaviorSubject<IProject[] | undefined>
  isError = false

  constructor(protected service: ProjectService) {
    this.projects$ = this.service.projects$
    this.projects$
  }

  ngOnInit(): void {
    this.service.updateProjects()
  }

  createProject() {
    this.service.createProject()
  }
}

export interface IProject {
  _id: number
  name: string
  students: IStudent[]
  jobCourses: {
    course: ICourse
    job: IStudyJob
  }[]
}
