import { HttpClient, HttpParams } from '@angular/common/http'
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
  IProgress,
  IRef,
  IStudent,
  IStudyJob,
  ITeacher,
  Student,
  Teacher,
} from 'src/app/shared/utils/interfaces'
import { ChooseJobService } from '../../shared/ui/choose-job/choose-job.service'
import { EditCourseService } from './ui/edit-course/edit-course.service'
import { ChooserService } from 'src/app/shared/ui/chooser/chooser.service'

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  course$ = new BehaviorSubject<ICourse | undefined>(undefined)
  // id$ = new BehaviorSubject<number | undefined>(undefined)
  // name$ = new BehaviorSubject<string | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private chooseJob: ChooseJobService
  ) {}

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

  getCourse(id: number) {
    return this.httpClient.get<ICourse>(`${environment.baseUrl}/courses/${id}`)
  }

  putCourse(id: number, data: any) {
    return this.httpClient.put(`${environment.baseUrl}/courses/${id}`, data)
  }

  addJob() {
    this.chooseJob.chooseJob().pipe().subscribe()
  }

  getCurrentProgress(id: number) {
    let params = new HttpParams().set('course', id)

    return this.httpClient.get<IProgress[]>(`${environment.baseUrl}/progress`, {
      params: params,
    })
  }
}
