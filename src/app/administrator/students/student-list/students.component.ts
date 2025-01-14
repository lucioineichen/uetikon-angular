import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import {
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  tap,
  throttleTime,
} from 'rxjs'
import { IClass, IStudent } from 'src/app/shared/utils/interfaces'
import { StudentsService } from './students.service'
import { CreateStudentsByJsonService } from './ui/create-students-by-json/create-students-by-json.service'

@Component({
  selector: 'app-students',
  templateUrl: `./students.component.html`,
  styles: [
    `
      .student:hover {
        cursor: pointer;
      }

      .main {
        margin-top: 150px;
        margin-left: 14%;
        margin-right: 14%;
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
export class StudentListComponent {
  readonly students$ = this.service.students$
  readonly classes$ = this.service.classes$
  searchControl = new FormControl()
  filteredStudents$!: Observable<IStudent[]>

  showSek1 = false
  showSek2 = false
  showSek3 = false

  constructor(
    private service: StudentsService,
    private router: Router,
    private createJsonStudents: CreateStudentsByJsonService
  ) {}

  print() {
    this.service
      .getTempPasswordStudentsText()
      .pipe(tap((obj: any) => console.log(obj.text)))
      .subscribe()
  }

  addJsonStudents() {
    this.createJsonStudents
      .createStudents()
      .pipe(tap(() => this.service.update()))
      .subscribe()
  }

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
