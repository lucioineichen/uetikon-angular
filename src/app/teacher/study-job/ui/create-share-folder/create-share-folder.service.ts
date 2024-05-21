import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable, map } from 'rxjs'
import { CreateShareFolderComponent } from './create-share-folder.component'
import { IRef } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class CreateShareFolderService {
  constructor(private dialog: MatDialog) {}

  createShareFolder(): Observable<
    { name: string; teacherList: number[] } | undefined
  > {
    const dialogRef = this.dialog.open(CreateShareFolderComponent)

    return dialogRef.afterClosed().pipe(
      map((form: { name: string; teacherList: IRef[] } | undefined) => {
        if (!form) return undefined
        return {
          name: form.name,
          teacherList: form.teacherList.map((teach: IRef) => teach._id),
        }
      })
    )
  }
}
