import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import {
  Observable,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  tap,
  throttleTime,
} from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { IStudent } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { IName } from 'src/app/user/user'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-students-dialog',
  templateUrl: './add-students-dialog.component.html',
  styles: [],
})
export class AddStudentsDialogComponent implements OnInit {
  students$: Observable<IStudent[]>
  searchControl = new FormControl()
  filteredStudents!: Observable<IStudent[]>
  isError = false

  constructor(
    private teacherService: TeacherService,
    @Inject(MAT_DIALOG_DATA) public selectedStudents: IStudent[]
  ) {
    console.log(
      'selectStudentDialog selectedStudents init: ',
      this.selectedStudents
    )
    this.students$ = this.teacherService.students$.pipe(
      catchError((err, caugt) => {
        this.isError = true
        return caugt
      })
    )

    this.filteredStudents = combineLatest([
      this.students$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        throttleTime(300),
        distinctUntilChanged()
      ),
    ]).pipe(
      map((value) => {
        return this.filterStudents(value[0], value[1])
      })
    )
  }

  ngOnInit(): void {
    this.teacherService.updateStudents()
  }

  filterStudents(students: IStudent[], search: string): IStudent[] {
    search = search.toLowerCase()
    return students.filter((student) => {
      const fullName = this.getFullName(student.name).toLowerCase()
      return fullName.includes(search)
    })
  }

  toggleSelection(event: MatCheckboxChange, student: IStudent): void {
    if (event.checked) {
      this.selectedStudents.push(student)
    } else {
      const index = this.selectedStudents.findIndex(
        (selectedStudent) => selectedStudent._id === student._id
      )
      if (index !== -1) {
        this.selectedStudents.splice(index, 1)
      }
    }
  }

  isSelected(student: IStudent): boolean {
    return (
      this.selectedStudents.findIndex(
        (selectedStudent) => selectedStudent._id === student._id
      ) > -1
    )
  }

  getFullName(name: IName): string {
    const { firstName, middleName, lastName } = name
    if (middleName) {
      return `${firstName} ${middleName} ${lastName}`
    } else {
      return `${firstName} ${lastName}`
    }
  }
}
