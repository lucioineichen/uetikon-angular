import { Component, Inject, OnInit } from '@angular/core'
import { SelectStudentsService } from './select-students.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IStudent } from 'src/app/interfaces'
import { BehaviorSubject } from 'rxjs'
import { MatCheckboxChange } from '@angular/material/checkbox'

@Component({
  selector: 'app-select-students',
  templateUrl: './select-students.component.html',
  styleUrls: ['./select-students.component.css'],
})
export class SelectStudentsComponent {
  filtered$: BehaviorSubject<IStudent[] | undefined>
  selected$: BehaviorSubject<number[]>

  constructor(protected service: SelectStudentsService) {
    this.filtered$ = service.filtered$
    this.selected$ = service.selected$
  }

  toggleSelection(event: MatCheckboxChange, student: IStudent): void {
    if (event.checked) {
      this.selected$.value.push(student._id)
    } else {
      const index = this.selected$.value.findIndex(
        (selected) => selected === student._id
      )
      if (index !== -1) {
        this.selected$.value.splice(index, 1)
      }
    }
  }

  isSelected(student: IStudent): boolean {
    return (
      this.selected$.value.findIndex((selected) => selected === student._id) >
      -1
    )
  }
}
