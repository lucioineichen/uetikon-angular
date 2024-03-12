import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import {
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'
import { IStudent } from 'src/app/interfaces'
import { StudentsService } from './students.service'
import { IClass } from './student/student.service'

@Component({
  selector: 'app-students',
  templateUrl: `./students.component.html`,
  styles: [
    `
      .student:hover {
        cursor: pointer;
      }
    `,
    `
      .add-container {
        position: fixed;
        right: 0;
        padding: 16px;
      }
    `,
    `
      mat-list-item {
        margin-left: 30px;
      }
      mat-list-item:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class StudentsComponent {
  readonly students$ = this.service.students$
  readonly classes$ = this.service.classes$
  searchControl = new FormControl()
  filteredStudents$!: Observable<IStudent[]>

  showSek1 = false
  showSek2 = false
  showSek3 = false

  constructor(private service: StudentsService, private router: Router) {}

  classFilter(grade: number) {
    return (_class: IClass) => _class.grade === grade
  }

  ngOnInit(): void {
    this.service.update()

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

  filterStudents(students: IStudent[] | undefined, search: string): IStudent[] {
    if (students == undefined) return []
    return students.filter((student) => {
      return student.fullName.toLowerCase().includes(search.toLowerCase())
    })
  }

  addStudent() {
    this.service.addStudent()
  }

  addClass() {
    this.service.addClass()
  }

  navigateToStudent(student: IStudent) {
    this.router.navigate(['administrator', 'students', student._id], {
      queryParams: {
        name: student.fullName,
      },
    })
  }
}
