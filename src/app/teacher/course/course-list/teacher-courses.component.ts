import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
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
  styleUrls: ['./teacher-courses.component.css'],
})
export class CourseListComponent implements OnInit {
  breakpoint = 3
  courses$ = this.service.courses$

  constructor(
    protected service: CourseService,
    private dialog: MatDialog,
    private uiService: DialogService,
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
    if (width > 1600) return 3
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
