import { Component } from '@angular/core'

@Component({
  selector: 'app-loading-job',
  template: `
    <div class="folder">
      <mat-list-item style="cursor: pointer">
        <div matListItemTitle>
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </div>
      </mat-list-item>
    </div>
  `,
  styles: [
    `
      .folder {
        width: 80%;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
        cursor: pointer;
      }

      .folder:hover {
        background-color: rgba(0, 0, 0, 0.06);
        cursor: pointer;
      }
    `,
  ],
})
export class LoadingJobComponent {}
