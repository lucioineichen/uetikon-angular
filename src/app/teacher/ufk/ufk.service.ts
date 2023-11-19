import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UfkService {
  classControl = new FormControl()
  studentControl = new FormControl()
  teacherControl = new FormControl()
  subjectControl = new FormControl()
  ufkControl = new FormControl()
  startDateControl = new FormControl()
  endDdateControl = new FormControl()

  classes$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )

  constructor() {}
}
