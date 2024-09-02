import { Component, Input } from '@angular/core'
import { IProgress, Progress } from '../../utils/interfaces'

@Component({
  selector: 'app-job-progress-table [job-progress-list]',
  templateUrl: './job-progress-table.component.html',
  styleUrls: ['./job-progress-table.component.css'],
})
export class JobProgressTableComponent {
  @Input('job-progress-list') progressList!: IProgress[]
  @Input('no-header') noHeader = false

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
