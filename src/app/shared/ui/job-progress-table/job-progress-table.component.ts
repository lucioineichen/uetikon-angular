import { Component, Input } from '@angular/core'
import { IProgress } from '../../utils/interfaces'

@Component({
  selector: 'app-job-progress-table [job-progress-list]',
  template: `
    <div class="table">
      <div class="header">
        <div class="sub-row">
          <div
            class="header-element"
            *ngFor="let header of headers"
            [ngStyle]="{ width: header.cssWidth }"
          >
            {{ header.name | titlecase }}
          </div>
        </div>
      </div>

      <div class="row" *ngFor="let progress of progressList">
        <div class="sub-row">
          <div [ngStyle]="{ width: this.headers[0].cssWidth }" class="col">
            {{ progress.job.name }}
          </div>
          <div [ngStyle]="{ width: this.headers[1].cssWidth }" class="col">
            {{ progress.grade | percent }}
          </div>
          <div [ngStyle]="{ width: this.headers[2].cssWidth }" class="col">
            {{ progress.progress | percent }}
          </div>
          <div [ngStyle]="{ width: this.headers[3].cssWidth }" class="col">
            <mat-chip
              [matTooltip]="comp.name"
              class="chip"
              *ngFor="let comp of progress.job.competences | slice : 0 : 4"
              >{{ comp.name | slice : 0 : 15 }}</mat-chip
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./job-progress-table.component.css'],
})
export class JobProgressTableComponent {
  @Input('job-progress-list') progressList!: IProgress[]

  readonly headers = [
    { name: 'LernJob', width: 25 },
    { name: 'Note', width: 20 },
    { name: 'Fortschritt', width: 20 },
    { name: 'Kompetenzen', width: 35 },
  ].map(Header.Build)
}

export class Header {
  constructor(public name: string, public width: number) {}

  get cssWidth() {
    return `${this.width}%`
  }

  static Build(data: { name: string; width: number }) {
    return new Header(data.name, data.width)
  }
}
