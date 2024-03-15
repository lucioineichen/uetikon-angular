import { Component } from '@angular/core'
import { StudentsService } from './students.service'
import { IStudent } from 'src/app/shared/utils/interfaces'
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentListComponent {
  students$: BehaviorSubject<IStudent[] | undefined>
  searchControl = new FormControl()
  filteredStudents$: Observable<IStudent[]>

  constructor(private service: StudentsService, private router: Router) {
    this.students$ = this.service.students$

    this.filteredStudents$ = combineLatest([
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
    this.service.updateStudents()
  }

  filterStudents(students: IStudent[] | undefined, search: string): IStudent[] {
    if (students == undefined) return []
    return students.filter((student) => {
      return student.fullName.toLowerCase().includes(search.toLowerCase())
    })
  }

  navigateToStudent(student: IStudent) {
    this.router.navigate(['teacher', 'students', student._id], {
      queryParams: {
        name: student.fullName,
      },
    })
  }
}
