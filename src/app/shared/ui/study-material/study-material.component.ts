import { Component, Input } from '@angular/core'
import { IFile } from '../../utils/interfaces'

@Component({
  selector: 'app-study-material',
  template: `
    <div class="card">
      <app-file [file]="material"></app-file>
    </div>
  `,
  styles: [
    `
      .card {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
          0 2px 10px 0 rgba(0, 0, 0, 0.06);
        padding-left: 16px;
        height: 52px;
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class StudyMaterialComponent {
  @Input() material!: IFile
}
