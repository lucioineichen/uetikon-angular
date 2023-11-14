import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable, tap } from 'rxjs'
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
  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

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
