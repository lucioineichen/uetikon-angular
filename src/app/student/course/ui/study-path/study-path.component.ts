import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IJobSelection, IStudyJob } from 'src/app/shared/utils/interfaces'
import { StudyPathService } from './study-path.service'
import { ActivatedRoute } from '@angular/router'
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
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.breakpoint = this.calcBreakpoint(window.innerWidth)
    this.updatePath()
  }

  openJob(job: IStudyJob) {}

  private updatePath() {
    this.service
      .getPath(
        this.route.snapshot.params['id'],
        this.auth.currentUser$.value._id
      )
      .pipe(
        tap(console.log),
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
    if (width > 1700) return 3
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
