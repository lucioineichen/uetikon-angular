import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Observable, catchError, mergeMap, tap } from 'rxjs'
import { filterNullish } from 'src/app/common/common'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { IStudent, ITeacher, Student, Teacher } from 'src/app/interfaces'

export interface ICourse {
  _id: number
  name: string
  credits: number
  teachers: ITeacher[]
  students: IStudent[]
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  course$ = new BehaviorSubject<ICourse | undefined>(undefined)
  id$ = new BehaviorSubject<number | undefined>(undefined)
  name$ = new BehaviorSubject<string | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private ui: UiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  update() {
    this.getCourse()
      .pipe(
        tap((course) => {
          course.students = course.students.map(Student.Build)
          course.teachers = course.teachers.map(Teacher.Build)
        }),
        tap((course) => this.course$.next(course)),
        catchError((err) => {
          this.ui.showToast('Kurs konnte nicht geladen werden')
          this.course$.error(err)
          return err
        })
      )
      .subscribe()
  }

  editStudents(
    course: ICourse,
    newStudents: IStudent[]
  ): Observable<IStudent[]> {
    return this.httpClient.put<IStudent[]>(
      `${environment.baseUrl}/teacher/course/${course._id}`,
      {
        students: newStudents?.map((student) => student._id),
      }
    )
  }

  navigateToStudent(student: IStudent) {
    this.router.navigate(
      ['teacher', 'courses', this.course$.value?._id, 'student', student._id],
      {
        queryParams: {
          name: student.fullName,
          courseName: this.course$.value?.name,
        },
      }
    )
  }

  private getCourse() {
    return this.id$.pipe(
      filterNullish(),
      mergeMap((id) =>
        this.httpClient.get<ICourse>(
          `${environment.baseUrl}/teacher/courses/${id}`
        )
      )
    )
  }
}
