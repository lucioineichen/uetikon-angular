import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IJobSelection, IStudyJob } from 'src/app/shared/utils/interfaces'
import { StudyPathService } from './study-path.service'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/core/auth/auth.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-study-path',
  templateUrl: './study-path.component.html',
  styleUrls: ['./study-path.component.css'],
})
export class StudyPathComponent implements OnInit {
  path$ = new BehaviorSubject<IJobSelection[] | undefined>(undefined)

  constructor(
    private service: StudyPathService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private ui: DialogService,
    private router: Router
  ) {}

  navigateEdit() {
    if (this.route.snapshot.params['studentId']) {
      this.router.navigate(
        [
          'teacher',
          'course',
          this.route.snapshot.params['courseId'],
          'student',
          this.route.snapshot.params['studentId'],
          'edit-path',
        ],
        {
          queryParams: {
            courseName: this.route.snapshot.queryParams['courseName'],
            studentName: this.route.snapshot.queryParams['studentName'],
          },
        }
      )
    } else {
      this.router.navigate(
        [
          'student',
          'course',
          this.route.snapshot.params['courseId'],
          'edit-path',
        ],
        {
          queryParams: {
            courseName: this.route.snapshot.queryParams['courseName'],
          },
        }
      )
    }
  }

  ngOnInit(): void {
    this.breakpoint = this.calcBreakpoint(window.innerWidth)
    this.updatePath()
  }

  openSelection(sel: IJobSelection) {
    if (this.auth.authStatus$.value?.userRole == 'student')
      this.router.navigate(['student', 'study-jobs', sel.studyJob._id], {
        queryParams: { name: sel.studyJob.name },
      })
    else
      this.router.navigate(
        [
          'teacher',
          'student',
          this.route.snapshot.params['studentId'],
          'job',
          sel.studyJob._id,
          'correction',
        ],
        {
          queryParams: {
            jobName: sel.studyJob.name,
            studentName: this.route.snapshot.queryParams['studentName'],
          },
        }
      )
  }

  private updatePath() {
    this.service
      .getPath(
        this.route.snapshot.params['courseId'],
        this.route.snapshot.params['studentId'] ||
          this.auth.currentUser$.value._id
      )
      .pipe(
        tap((path) => {
          if (path.length == 0) this.breakpoint = 1
        }),
        tap((path) => this.path$.next(path)),
        catchError((err) => {
          this.ui.showToast('LernWeg konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  // Grid
  breakpoint!: number

  private calcBreakpoint(width: number) {
    if (this.path$.value?.length == 0) return 1
    if (width > 1800) return 3
    if (width > 1170) return 2
    return 1
  }

  private calcMargin(width: number) {
    if (width > 1600) return width / 10
    if (width > 1170) return width / 6
    return width / 10
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
  }
}
