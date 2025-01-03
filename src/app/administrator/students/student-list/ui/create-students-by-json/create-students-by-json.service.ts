import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { CreateStudentsByJsonComponent } from './create-students-by-json.component'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CreateStudentsByJsonService {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  createStudents() {
    const dialogRef = this.dialog.open(CreateStudentsByJsonComponent)

    return dialogRef.afterClosed()
  }

  dumpPostStudents(students: string) {
    return this.http.post(`${environment.baseUrl}/dump-post-students`, {
      students,
    })
  }
}
