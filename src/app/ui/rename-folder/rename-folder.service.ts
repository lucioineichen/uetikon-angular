import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { RenameFolderComponent } from './rename-folder.component'

@Injectable({
  providedIn: 'root',
})
export class RenameFolderService {
  constructor(private dialog: MatDialog) {}

  renameFolder(oldName?: string) {
    const dialogRef = this.dialog.open(RenameFolderComponent, { data: oldName })

    return dialogRef.afterClosed()
  }
}
