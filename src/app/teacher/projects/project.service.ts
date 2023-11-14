// import { HttpClient } from '@angular/common/http'
// import { Injectable } from '@angular/core'
// import { MatDialog } from '@angular/material/dialog'
// import {
//   BehaviorSubject,
//   Observable,
//   catchError,
//   filter,
//   mergeMap,
//   of,
//   tap,
//   throwError,
// } from 'rxjs'
// import { UiService } from 'src/app/common/ui.service'
// import { environment } from 'src/app/environment/environment.demo'
// import { ICourse, IStudentParticipant, IStudyJob } from 'src/app/interfaces'
// import { IProject } from './projects.component'
// import { ProjectFormComponent } from './project-form/project-form.component'
// import { Router } from '@angular/router'

// @Injectable({
//   providedIn: 'root',
// })
// export class ProjectService {
//   projects$ = new BehaviorSubject<IProject[] | undefined>(undefined)

//   constructor(
//     private httpClient: HttpClient,
//     private uiService: UiService,
//     private dialog: MatDialog,
//     private router: Router
//   ) {}

//   private getProjects(): Observable<IProject[]> {
//     return this.httpClient.get<IProject[]>(
//       `${environment.baseUrl}/teacher/projects`
//     )
//   }

//   updateProjects() {
//     this.getProjects()
//       .pipe(
//         tap((projects) => {
//           console.log(projects)
//           this.projects$.next(projects)
//         }),
//         catchError((err) => {
//           this.projects$.error(err)
//           this.uiService.showToast('Projekte konnten nicht geladen werden')
//           return err
//         })
//       )
//       .subscribe()
//   }

//   openProject(project: IProject) {
//     this.router.navigate(['teacher', 'projects', project._id], {
//       queryParams: {
//         name: project.name,
//       },
//     })
//   }

//   createProject() {
//     const dialogRef = this.dialog.open(ProjectFormComponent)

//     dialogRef
//       .afterClosed()
//       .pipe(
//         filter((data) => data != ''),
//         mergeMap((data) => {
//           return this.postProject(data)
//         }),
//         tap((project) => this.projects$.value?.push(project)),
//         catchError((err) => {
//           this.uiService.showToast('Projekt konnte nicht erstelt werden')
//           return err
//         })
//       )
//       .subscribe()
//   }

//   postProject(data: {
//     name: string
//     jobCourses: {
//       course: ICourse
//       job: IStudyJob
//     }[]
//   }) {
//     const form: { name: string; courseIds: number[]; jobIds: number[] } = {
//       name: data.name,
//       courseIds: [],
//       jobIds: [],
//     }

//     data.jobCourses.forEach((jobCourse) => {
//       form.courseIds.push(jobCourse.course._id)
//       form.jobIds.push(jobCourse.job._id)
//     })

//     console.log(form)

//     return this.httpClient.post<IProject>(
//       `${environment.baseUrl}/teacher/projects`,
//       form
//     )
//   }
// }
