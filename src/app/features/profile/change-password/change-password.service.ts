import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ChangePasswordComponent } from './change-password.component'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent)

    return dialogRef.afterClosed()
  }

  setNewPassword(newPassword: string) {
    return this.http.post(`${environment.baseUrl}/set-new-password`, {
      newPassword,
    })
  }
}
