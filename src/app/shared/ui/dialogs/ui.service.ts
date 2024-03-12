import { Component, Injectable } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'

import { SimpleDialogComponent } from './simple-dialog.component'
import { ConfirmDeletionDialogComponent } from './confirm-deletion-dialog.component'

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  showToast(message: string, action = 'Close', config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, config || { duration: 7000 })
  }

  showDialog(
    title: string,
    content: string,
    okText = 'OK',
    cancelText?: string,
    customConfig?: MatDialogConfig
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(
      SimpleDialogComponent,
      customConfig || {
        width: '300px',
        data: { title, content, okText, cancelText },
      }
    )
    return dialogRef.afterClosed()
  }

  confirmDeletion(type: string, name: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDeletionDialogComponent, {
      width: '250px',
      data: { type, name },
    })

    return dialogRef.afterClosed()
  }
}
