import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCourseCreatorComponent } from './teacher-course-creator-dialog.component'
import { Observable, filter, mergeMap, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CourseCreatorService {
  constructor(private dialog: MatDialog) {}

  createCourse(): Observable<
    | undefined
    | {
        name: any
        credits: any
        isProject: any
        studentIdList: any
      }
  > {
    const dialogRef = this.dialog.open(TeacherCourseCreatorComponent)

    return dialogRef.afterClosed()
  }
}
