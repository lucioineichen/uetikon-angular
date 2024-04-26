import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ContainerDetailService } from './container-detail.service'
import { BehaviorSubject, tap } from 'rxjs'

@Component({
  selector: 'app-container-detail',
  templateUrl: './container-detail.component.html',
  styleUrls: ['./container-detail.component.css'],
})
export class ContainerDetailComponent implements OnInit {
  breakpoint!: number

  readonly containerId$ = this.service.containerId$
  readonly containerName$ = this.service.containerName$
  readonly courseName$ = this.service.courseName$
  readonly courseId$ = this.service.courseId$
  readonly container$ = this.service.container$

  constructor(
    private route: ActivatedRoute,
    protected service: ContainerDetailService,
    private router: Router
  ) {}

  private calcBreakpoint(width: number) {
    if (width > 1700) return 3
    if (width > 1290) return 2
    return 1
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
  }

  getDataFromRoute() {
    this.route.params
      .pipe(
        tap((params) => {
          this.containerId$.next(params['containerId'])
          this.courseId$.next(params['courseId'])
        })
      )
      .subscribe()

    this.route.queryParams
      .pipe(
        tap((params) => {
          this.containerName$.next(params['containerName'])
        })
      )
      .subscribe()

    this.route.queryParams
      .pipe(
        tap((params) => {
          this.courseName$.next(params['courseName'])
        })
      )
      .subscribe()
  }

  ngOnInit(): void {
    this.getDataFromRoute()
    this.service.update()
    this.breakpoint = this.calcBreakpoint(window.innerWidth)
  }

  deleteContainer() {
    this.service
      .deleteContainer()
      ?.pipe(tap(() => this.goBack()))
      .subscribe()
  }

  addDependency() {
    this.service.addDependency()
  }

  removeDependency() {
    this.service.removeDependency()
  }

  goBack() {
    const courseId = this.courseId$.getValue()
    const courseName = this.courseName$.getValue()
    if (courseId && courseName)
      this.router.navigate(['teacher', 'courses', courseId], {
        queryParams: {
          name: courseName,
        },
      })
    else this.router.navigate(['teacher', 'courses'])
  }
}
