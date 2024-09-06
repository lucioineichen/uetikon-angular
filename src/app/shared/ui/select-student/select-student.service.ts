import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DialogService } from '../dialogs/ui.service'
import { Observable } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { SelectStudentComponent } from './select-student.component'
import { IRef, IStudent } from '../../utils/interfaces'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class SelectStudentService {
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${environment.baseUrl}/students`)
  }

  selectStudent(selected?: number): Observable<IRef | undefined> {
    const dialogRef = this.dialog.open(SelectStudentComponent, {
      data: selected,
    })

    return dialogRef.afterClosed()
  }
}
