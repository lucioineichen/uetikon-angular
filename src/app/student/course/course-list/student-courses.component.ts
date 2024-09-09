import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { CourseListService } from './course.service'
import { ICoursePre } from 'src/app/teacher/course/course-list/course.service'
import { Router } from '@angular/router'
import { ICourse } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-student-courses',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class StudentCoursesComponent implements OnInit {
  courses$: BehaviorSubject<ICourse[] | undefined>
  breakpoint!: number

  constructor(private service: CourseListService, private router: Router) {
    this.courses$ = this.service.courses$
  }

  openCourse(id: number, name: string) {
    this.router.navigate(['student', 'courses', id], {
      queryParams: {
        name,
      },
    })
  }

  ngOnInit(): void {
    this.service.updateCourses()
    this.breakpoint = this.calcBreakpoint(window.innerWidth)
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
  }

  private calcBreakpoint(width: number) {
    if (width > 1600) return 3
    if (width > 850) return 2
    return 1
  }
}
