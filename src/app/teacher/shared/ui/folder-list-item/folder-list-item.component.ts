import { Component, Input } from '@angular/core'
import { IFolder, IRef } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-folder-list-item [folder]',
  template: ` <mat-list-item class="folder" [ngClass]="{ hover: hover }">
    <mat-icon matListItemIcon> folder </mat-icon>
    <div matListItemTitle>
      <span>{{ folder.name | titlecase }}</span>
    </div>
  </mat-list-item>`,
  styles: [
    `
      .folder {
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
    `
      .hover:hover {
        background-color: rgba(0, 0, 0, 0.06);
        cursor: pointer;
      }
    `,
  ],
})
export class FolderListItemComponent {
  @Input('folder') folder!: IRef
  @Input('hover-effect') hover = true
}
