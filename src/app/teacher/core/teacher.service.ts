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
} from '../../shared/utils/interfaces'
import { DialogService } from '../../shared/ui/dialogs/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { ICreateCourseData } from '../courses/teacher-courses.component'
import { environment } from '../../core/environment/environment.demo'

export interface ITeacherService {
  readonly students$: ReplaySubject<IStudent[]>
  readonly competences$: ReplaySubject<ICompetence[]>
  updateCompetences(): void
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
    private uiService: DialogService,
    private dialog: MatDialog
  ) {}

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
