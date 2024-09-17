import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { IRef } from '../../utils/interfaces'
import { ChooserComponent } from './chooser.component'

@Injectable({
  providedIn: 'root',
})
export class ChooserService {
  constructor(private dialog: MatDialog) {}

  choose(
    message: string,
    objects: IRef[],
    selected?: number
  ): Observable<number | undefined> {
    const dialogRef = this.dialog.open(ChooserComponent, {
      data: { message, objects, selected },
    })

    return dialogRef.afterClosed()
  }
}
