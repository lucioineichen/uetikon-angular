import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ContainerDetailService } from './container-detail.service'
import { BehaviorSubject, catchError, filter, mergeMap, tap } from 'rxjs'
import { ConfirmDeleteService } from 'src/app/shared/ui/confirm-delete/confirm-delete.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-container-detail',
  templateUrl: './container-detail.component.html',
  styleUrls: ['./container-detail.component.css'],
})
export class ContainerDetailComponent implements OnInit {
  readonly containerId$ = this.service.containerId$
  readonly containerName$ = this.service.containerName$
  readonly courseName$ = this.service.courseName$
  readonly courseId$ = this.service.courseId$
  readonly container$ = this.service.container$

  constructor(
    private route: ActivatedRoute,
    private confirmDelete: ConfirmDeleteService,
    protected service: ContainerDetailService,
    private router: Router,
    private ui: DialogService
  ) {}

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
  }

  deleteContainer() {
    const name = this.containerName$.value
    const id = this.containerId$.value
    if (!name || !id) return
    this.confirmDelete
      .confirmDelete(name)
      .pipe(
        filter((isConfirm) => isConfirm),
        mergeMap(() => this.service.deleteContainer(id)),
        tap(() => this.goBack()),
        tap(() => this.ui.showToast(`${name} wurde erfolgreich gelöscht`)),
        catchError((err) => {
          this.ui.showToast(`${name} konnte nicht gelöscht werden`)
          return err
        })
      )
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
