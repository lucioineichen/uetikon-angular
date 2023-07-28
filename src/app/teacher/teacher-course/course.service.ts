import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { ICourse, IStudent } from 'src/app/interfaces'

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
}
