import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NameComponent } from './name.component'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NameService {
  constructor(private dialog: MatDialog) {}

  name(message: string, name: string = ''): Observable<string | undefined> {
    const dialogRef = this.dialog.open(NameComponent, {
      data: { message, name },
    })

    return dialogRef.afterClosed()
  }
}
