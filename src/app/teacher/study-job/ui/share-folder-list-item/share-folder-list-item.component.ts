import { Component, Input, OnInit } from '@angular/core'
import { IShareFolder } from '../../study-job-list/study-jobs.service'

@Component({
  selector: 'app-share-folder-list-item [folder]',
  template: `
    <mat-list-item class="folder">
      <mat-icon matListItemIcon> folder </mat-icon>
      <div matListItemTitle>
        <span>{{ folder.name | titlecase }}</span>
        <span class="flex-spacer"></span>
        <mat-icon class="share-icon">group</mat-icon>
        <span>
          ({{ folder.teacherReadList.length + folder.teacherWriteList.length }})
        </span>
        <span>
          ° {{ folder.storeFolderList.length + folder.studyJobList.length }}
        </span>
        <span *ngIf="folder.isRead"><mat-icon>visibility</mat-icon></span>
      </div>
    </mat-list-item>
  `,
  styles: [
    `
      .folder {
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
      }
    `,
    `
      .folder:hover {
        background-color: rgba(0, 0, 0, 0.06);
        cursor: pointer;
      }
    `,
    `
      .share-icon {
        margin-left: 10px;
        vertical-align: bottom;
      }
    `,
  ],
})
export class ShareFolderListItemComponent implements OnInit {
  @Input() folder!: IShareFolder

  ngOnInit(): void {
    console.log('folder in share-folder-list-item-component: ', this.folder)
  }
}
