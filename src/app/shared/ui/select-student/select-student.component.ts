import { Component, Inject, OnInit } from '@angular/core'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  tap,
} from 'rxjs'
import { IRef, IStudent, Student } from '../../utils/interfaces'
import { SelectStudentService } from './select-student.service'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { FormControl } from '@angular/forms'
import { filterNullish } from '../../utils/filternullish'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogService } from '../dialogs/ui.service'

@Component({
  selector: 'app-select-student',
  templateUrl: './select-student.component.html',
  styleUrls: ['./select-student.component.css'],
})
export class SelectStudentComponent implements OnInit {
  search = new FormControl('')
  students$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  filtered$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  selected$ = new BehaviorSubject<IRef | undefined>(undefined)
  constructor(
    private service: SelectStudentService,
    private ui: DialogService,
    @Inject(MAT_DIALOG_DATA) protected initalStudent: number | undefined
  ) {}
  toggleSelection(event: MatCheckboxChange, student: IStudent): void {
    if (event.checked) {
      this.selected$.next({ _id: student._id, name: student.fullName })
    } else {
      this.selected$.next(undefined)
    }
  }
  isSelected(student: IStudent): boolean {
    const selected = this.selected$.value
    if (!selected) return false
    return student._id == selected._id
  }

  ngOnInit(): void {
    this.initStudents()
    this.syncFilteredStudents()
    this.initSelected()
  }

  private initStudents() {
    this.service
      .getStudents()
      .pipe(
        map((students) => students.map(Student.Build)),
        tap((students) => this.students$.next(students)),
        catchError((err) => {
          this.ui.showToast('Schüler konnten nicht geladen werden')
          this.students$.error(new Error('server 500'))
          return err
        })
      )
      .subscribe()
  }

  private syncFilteredStudents() {
    combineLatest([
      this.students$.pipe(filterNullish()),
      this.search.valueChanges.pipe(startWith(''), distinctUntilChanged()),
    ])
      .pipe(
        map(this.filterStudents),
        tap((filtered) => this.filtered$.next(filtered))
      )
      .subscribe()
  }

  private initSelected() {
    if (!this.initalStudent) return
    this.students$
      .pipe(
        filterNullish(),
        map((students) =>
          students.find((student) => student._id == this.initalStudent)
        ),
        filterNullish(),
        map((student) => {
          return { _id: student._id, name: student.fullName }
        }),
        tap((student) => {
          this.selected$.next(student)
        })
      )
      .subscribe()
  }

  private filterStudents([students, search]: [
    IStudent[] | undefined,
    string | null
  ]): IStudent[] | undefined {
    if (!students) return undefined
    if (!search || search == '') return students
    return students.filter((student) =>
      student.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }
}
