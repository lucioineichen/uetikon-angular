import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  map,
  tap,
  throwError,
} from 'rxjs'
import {
  ICompetence,
  IFolder,
  IStudent,
  IStudyJob,
  ITask,
  Student,
  Teacher,
} from '../interfaces'
import { environment } from '../environment/environment.demo'
import { UiService } from '../common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { AddStudentsDialogComponent } from './add-students-dialog/add-students-dialog.component'
import { ICreateCourseData } from './teacher-courses/teacher-courses.component'

export interface ITeacherService {
  readonly students$: ReplaySubject<IStudent[]>
  readonly competences$: ReplaySubject<ICompetence[]>
  updateCompetences(): void
  updateStudents(): void
  getStudyJobs(repoId: number): Observable<IStudyJob[]>
  addTask(taskData: any, job: IStudyJob): Observable<ITask>
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService implements ITeacherService {
  readonly students$ = new ReplaySubject<IStudent[]>(1)
  readonly competences$ = new ReplaySubject<ICompetence[]>(1)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getStudents(): Observable<IStudent[]> {
    return this.httpClient
      .get<IStudent[]>(`${environment.baseUrl}/students`)
      .pipe(map((students) => students.map(Student.Build)))
  }

  private getCompetences(): Observable<ICompetence[]> {
    return this.httpClient.get<ICompetence[]>(
      `${environment.baseUrl}/teacher/competences`
    )
  }

  addTask(taskData: any, job: IStudyJob): Observable<ITask> {
    return this.httpClient.post<ITask>(
      `${environment.baseUrl}/teacher/study-job/${job._id}/tasks`,
      taskData
    )
  }

  getStudyJobs(repoId: number) {
    return this.httpClient.get<IStudyJob[]>(
      `${environment.baseUrl}/teacher/repository/${repoId}/study-jobs`
    )
  }

  updateCompetences(): void {
    this.getCompetences().subscribe({
      next: (tree) => this.competences$.next(tree),
      error: (e: Error) => {
        this.uiService.showToast('Kompetenzen konnten nicht geladen werden')
        this.competences$.error(throwError(() => new Error('server 500')))
      },
    })
  }

  updateStudents() {
    this.getStudents().subscribe({
      next: (students) => this.students$.next(students),
      error: (e: Error) => {
        this.uiService.showToast('Schüler konnten nicht geladen werden')
        this.students$.error(new Error('server 500'))
      },
    })
  }

  selectStudents(selectedStudents: IStudent[] = []) {
    const dialogRef = this.dialog.open(AddStudentsDialogComponent, {
      data: [...selectedStudents],
    })

    return dialogRef.afterClosed().pipe(
      map((data) => {
        return data ? [...data] : null
      })
    ) as Observable<IStudent[] | null>
  }

  getFolder(id: number) {
    return this.httpClient.get<IFolder>(
      `${environment.baseUrl}/teacher/folder/${id}`
    )
  }

  renameFolder(folder: IFolder, newName: string): Observable<IFolder> {
    return this.httpClient.put<IFolder>(
      `${environment.baseUrl}/teacher/folder/${folder._id}`,
      {
        name: newName,
      }
    )
  }

  deleteFolder(folderId: number) {
    return this.httpClient.delete<void>(
      `${environment.baseUrl}/teacher/folder/${folderId}`
    )
  }

  deleteStudyJob(jobId: number) {
    return this.httpClient.delete<void>(
      `${environment.baseUrl}/teacher/study-job/${jobId}`
    )
  }
}
