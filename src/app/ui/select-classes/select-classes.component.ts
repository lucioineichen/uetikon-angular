import { Component, Input, OnInit } from '@angular/core'
import { SelectClassesService } from './select-classes.service'
import { FormControl } from '@angular/forms'
import { tap } from 'rxjs'

@Component({
  selector: 'app-select-classes [control]',
  templateUrl: './select-classes.component.html',
  styles: [],
})
export class SelectClassesComponent implements OnInit {
  @Input() control!: FormControl
  readonly classes$ = this.service.classes$

  constructor(private service: SelectClassesService) {}

  ngOnInit(): void {
    this.service.update()
  }
}
