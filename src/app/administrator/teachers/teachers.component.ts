import { Component, OnInit } from '@angular/core'
import { TeacherService } from './teacher.service'
import { ITeacher } from 'src/app/interfaces'
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import {
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: [
    `
      .teacher:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class TeachersComponent implements OnInit {
  teachers$ = this.service.teachers$
  searchControl = new FormControl()
  filteredTeachers$!: Observable<ITeacher[]>

  constructor(private service: TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.service.updateTeachers()

    this.filteredTeachers$ = combineLatest([
      this.teachers$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        throttleTime(300),
        distinctUntilChanged()
      ),
    ]).pipe(
      map((value) => {
        return this.filterTeachers(value[0], value[1])
      })
    )
  }

  filterTeachers(teachers: ITeacher[] | undefined, search: string): ITeacher[] {
    if (teachers == undefined) return []
    return teachers.filter((teacher) => {
      return teacher.fullName.toLowerCase().includes(search.toLowerCase())
    })
  }

  addTeacher() {
    this.service.addTeacher()
  }

  navigateToTeacher(teacher: ITeacher) {
    this.router.navigate(['administrator', 'teachers', teacher._id], {
      queryParams: {
        name: teacher.fullName,
      },
    })
  }
}
