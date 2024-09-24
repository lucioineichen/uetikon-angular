import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { ICourse, IStudentCourse } from 'src/app/shared/utils/interfaces'
import { AuthService } from 'src/app/core/auth/auth.service'

@Injectable({
  providedIn: 'root',
})
export class CourseDetailService {
  constructor(private http: HttpClient) {}

  getCourse(id: number) {
    return this.http.get<IStudentCourse>(
      `${environment.baseUrl}/student/course/${id}`
    )
  }
}
