import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { EditCourseComponent } from './edit-course.component'
import { HttpClient } from '@angular/common/http'
import { ICourse } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
 })
export class EditCourseService {
  constructor(private dialog: MatDialog) {}

  editCourseInfo(courseInfo: ICourse): Observable<
    | undefined
    | {
        name: string
        credits: number
        isProject: boolean
        imageUrl: string
        studentList: number[]
        teacherList: number[]
      }
  > {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      data: courseInfo,
    })

    return dialogRef.afterClosed()
  }
}
