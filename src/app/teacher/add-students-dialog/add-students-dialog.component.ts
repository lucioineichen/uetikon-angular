import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { IStudent } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { IName } from 'src/app/user/user'
import { MatCheckboxChange } from '@angular/material/checkbox'

@Component({
  selector: 'app-add-students-dialog',
  templateUrl: './add-students-dialog.component.html',
  styles: [],
})
export class AddStudentsDialogComponent {
  students: IStudent[] = []
  selectedStudents: IStudent[] = []
  searchControl = new FormControl()
  filteredStudents!: Observable<IStudent[]>

  constructor(private teacherService: TeacherService) {
    this.filteredStudents = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterStudents(value))
    )
  }

  ngOnInit(): void {
    this.loadStudents()
    this.initializeSearch()
  }

  loadStudents(): void {
    this.students = this.teacherService.getStudents()
  }

  initializeSearch(): void {
    this.filteredStudents = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map((value) => this.filterStudents(value))
    )
  }

  filterStudents(value: string): IStudent[] {
    const filterValue = value.toLowerCase()
    return this.students.filter((student) => {
      const fullName = this.getFullName(student.name).toLowerCase()
      return fullName.includes(filterValue)
    })
  }

  toggleSelection(event: MatCheckboxChange, student: IStudent): void {
    if (event.checked) {
      this.selectedStudents.push(student)
    } else {
      const index = this.selectedStudents.indexOf(student)
      if (index !== -1) {
        this.selectedStudents.splice(index, 1)
      }
    }
  }

  isSelected(student: IStudent): boolean {
    return this.selectedStudents.includes(student)
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
