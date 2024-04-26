import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, Observable, catchError, mergeMap, tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import {
  IChat,
  ICompetence,
  ICourse,
  IRef,
  IStudent,
  IStudyJob,
  ITeacher,
  Student,
  Teacher,
} from 'src/app/shared/utils/interfaces'
import { ChooseJobService } from '../../shared/ui/choose-job/choose-job.service'

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  course$ = new BehaviorSubject<ICourse | undefined>(undefined)
  id$ = new BehaviorSubject<number | undefined>(undefined)
  name$ = new BehaviorSubject<string | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private ui: DialogService,
    private router: Router,
    private chooseJob: ChooseJobService
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
        this.httpClient.get<ICourse>(`${environment.baseUrl}/courses/${id}`)
      )
    )
  }

  addJob() {
    this.chooseJob.chooseJob().pipe().subscribe()
  }
}
