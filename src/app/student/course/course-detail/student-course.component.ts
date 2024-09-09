import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, ReplaySubject, catchError, map, tap } from 'rxjs'
import { Role } from 'src/app/core/auth/auth.enum'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import {
  ICourse,
  IFile,
  IMessage,
  IProgress,
  IStudent,
  IStudentCourse,
  Student,
} from 'src/app/shared/utils/interfaces'
import { User } from 'src/app/core/auth/user'
import { CourseDetailService } from './course.service'
import { Location } from '@angular/common'
import { HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-student-course',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class StudentCourseComponent implements OnInit {
  currentProgress$ = new BehaviorSubject<IProgress[] | undefined>(undefined)
  course$ = new BehaviorSubject<IStudentCourse | undefined>(undefined)
  id: number
  name: string

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private service: CourseDetailService,
    private uiService: DialogService,
    private location: Location
  ) {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
  }

  openContainer(containerId: number, containerName: string) {
    this.router.navigate(
      ['student', 'courses', this.id, 'containers', containerId],
      {
        queryParams: {
          name: this.name,
          containerName,
        },
      }
    )
  }

  editPath() {
    this.router.navigate(['student', 'courses', this.id, 'edit-path'], {
      queryParams: {
        name: this.name,
      },
    })
  }

  goBack() {
    this.location.back()
  }

  ngOnInit(): void {
    this.service
      .getCourse(this.id)
      .pipe(
        tap((course) => this.course$.next(course)),
        catchError((err) => {
          this.uiService.showToast('Kurs konnte nicht geladen werden')
          this.course$.error('server 500')
          return err
        })
      )
      .subscribe()
  }
}
