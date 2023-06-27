import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, ReplaySubject, map, tap, throwError } from 'rxjs'
import {
  ICourse,
  IRepositoryFolder,
  IStudent,
  IStudyJob,
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
  updateCourses(): void
  updateStudents(): void
  updaterepositoryTree(): void
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService implements ITeacherService {
  readonly courses$ = new ReplaySubject<ICourse[]>(1)
  readonly students$ = new ReplaySubject<IStudent[]>(1)
  readonly repositoryTree$ = new ReplaySubject<IRepositoryFolder>(1)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  updaterepositoryTree(): void {
    this.httpClient
      .get<IRepositoryFolder>(`${environment.baseUrl}/teacher/tree`)
      .subscribe({
        next: (tree) => this.repositoryTree$.next(tree),
        error: (e: Error) => {
          this.uiService.showToast('LernJobs konnten nicht geladen werden')
          this.repositoryTree$.error(throwError(() => new Error('server 500')))
        },
      })
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
}
