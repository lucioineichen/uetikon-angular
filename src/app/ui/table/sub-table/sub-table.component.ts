import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-sub-table [data] [headers]',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.css'],
})
export class SubTableComponent {
  @Input() data!: { [key: string]: any }[]
  @Input() headers!: { key: string; name: string; style?: string }[]

  dataFromKey(data: any, key: string) {
    return data[key]
  }

  get width() {
    return `${100 / this.headers.length}%`
  }
}
