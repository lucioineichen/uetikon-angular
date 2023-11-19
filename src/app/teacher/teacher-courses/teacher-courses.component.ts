import { Component, OnInit } from '@angular/core'
import { catchError } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { TeacherCourseCreatorDialogComponent } from './teacher-course-creator-dialog/teacher-course-creator-dialog.component'
import { UiService } from 'src/app/common/ui.service'
import { Router } from '@angular/router'
import { CourseService } from './course.service'

export interface ICreateCourseData {
  name: string
  credits: number
  studentIds: number[]
}

@Component({
  selector: 'app-tacher-courses',
  templateUrl: './teacher-courses.component.html',
  styles: [
    `
      .active-link {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }
    `,
    `
      .course-card:hover {
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition: all 200ms ease;
      }
    `,
    `
      .project {
      }
    `,
  ],
})
export class TeacherCoursesComponent implements OnInit {
  breakpoint = 4
  courses$ = this.service.courses$

  constructor(
    protected service: CourseService,
    private dialog: MatDialog,
    private uiService: UiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.updateCourses()
    this.breakpoint = this.calcBreakpoint(window.innerWidth)
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
  }

  private calcBreakpoint(width: number) {
    if (width > 1580) return 4
    if (width > 1200) return 3
    if (width > 850) return 2
    return 1
  }

  openCourse(id: number, name: string) {
    this.router.navigate(['teacher', 'courses', id], {
      queryParams: {
        name,
      },
    })
  }
}
