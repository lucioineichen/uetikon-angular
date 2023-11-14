import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs'
// import { IProject } from '../projects/projects.component'
import { HttpClient } from '@angular/common/http'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { environment } from 'src/app/environment/environment.demo'
import { Student } from 'src/app/interfaces'

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // readonly project$ = new BehaviorSubject<IProject | undefined>(undefined)
  // constructor(private httpClient: HttpClient, private uiService: UiService) {}
  // private getProject(id: number): Observable<IProject> {
  //   return this.httpClient.get<IProject>(
  //     `${environment.baseUrl}/teacher/project/${id}`
  //   )
  // }
  // updateProject(id: number) {
  //   this.getProject(id)
  //     .pipe(
  //       tap((project) => {
  //         project.students = project.students.map(Student.Build)
  //       }),
  //       tap((project) => {
  //         this.project$.next(project)
  //       }),
  //       catchError((err) => {
  //         this.project$.error(err)
  //         this.uiService.showToast('Projekt konnten nicht geladen werden')
  //         return err
  //       })
  //     )
  //     .subscribe()
  // }
}
