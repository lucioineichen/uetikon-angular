import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable, tap } from 'rxjs'
import { IRef } from '../../utils/interfaces'
import { SelectCourseComponent } from './select-course.component'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class SelectCourseService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  getCourseList(student?: number) {
    let params = new HttpParams().set('format', 'ref')
    // if (student) params.append('student', student)

    return this.http
      .get<IRef[]>(`${environment.baseUrl}/courses`, { params: params })
      .pipe(tap(console.info))
  }
  selectCourse(student?: number): Observable<IRef> {
    const dialogRef = this.dialog.open(SelectCourseComponent, {
      data: { student },
    })

    return dialogRef.afterClosed()
  }
}
