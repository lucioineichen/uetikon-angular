import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, ReplaySubject, map, tap, throwError } from 'rxjs'
import {
  ICompetence,
  ICourse,
  IRepositoryFolder,
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
  readonly courses$: ReplaySubject<ICourse[]>
  readonly students$: ReplaySubject<IStudent[]>
  readonly repositoryTree$: ReplaySubject<IRepositoryFolder>
  readonly competences$: ReplaySubject<ICompetence[]>
  updateCompetences(): void
  updateCourses(): void
  updateStudents(): void
  updaterepositoryTree(): void
  getStudyJobs(repoId: number): Observable<IStudyJob[]>
  addTask(taskData: any, job: IStudyJob): Observable<ITask>
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService implements ITeacherService {
  readonly courses$ = new ReplaySubject<ICourse[]>(1)
  readonly students$ = new ReplaySubject<IStudent[]>(1)
  readonly repositoryTree$ = new ReplaySubject<IRepositoryFolder>(1)
  readonly competences$ = new ReplaySubject<ICompetence[]>(1)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getRepositoryTree(): Observable<IRepositoryFolder> {
    return this.httpClient.get<IRepositoryFolder>(
      `${environment.baseUrl}/teacher/repository-folder-tree`
    )
  }

  private getCourses(): Observable<ICourse[]> {
    return this.httpClient
      .get<ICourse[]>(`${environment.baseUrl}/user/courses`)
      .pipe(
        tap((courses) =>
          courses.forEach((course) => {
            course.students = course.students.map(Student.Build)
            course.teachers = course.teachers.map(Teacher.Build)
          })
        )
      )
  }

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

  updaterepositoryTree(): void {
    this.getRepositoryTree().subscribe({
      next: (tree) => this.repositoryTree$.next(tree),
      error: (e: Error) => {
        this.uiService.showToast('LernJobs konnten nicht geladen werden')
        this.repositoryTree$.error(throwError(() => new Error('server 500')))
      },
    })
  }

  createCourse(data: ICreateCourseData) {
    console.log('data to create course with (createCourse()): ', data)
    return this.httpClient
      .post<ICourse[]>(`${environment.baseUrl}/courses`, data)
      .pipe(tap((courses) => this.courses$.next(courses)))
  }

  updateCourses() {
    this.getCourses().subscribe({
      next: (courses) => this.courses$.next(courses),
      error: (e: Error) => {
        this.uiService.showToast('Kurse konnten nicht geladen werden')
        this.courses$.error(new Error('server 500'))
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
        if (!data) return data
        else return [...data]
      })
    ) as Observable<IStudent[] | null>
  }

  getCourse(id: number) {
    return this.httpClient
      .get<ICourse>(`${environment.baseUrl}/course/${id}`)
      .pipe(
        tap((course) => {
          course.students = course.students.map(Student.Build)
          course.teachers = course.teachers.map(Teacher.Build)
        })
      )
  }

  createStudyJob(data: any) {
    console.log(data)
    return this.httpClient.post<IStudyJob>(
      `${environment.baseUrl}/teacher/study-jobs`,
      data
    )
  }
}
