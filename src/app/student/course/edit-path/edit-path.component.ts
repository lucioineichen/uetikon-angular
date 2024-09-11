import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EditPathService } from './edit-path.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IContainerPath } from 'src/app/shared/utils/interfaces'
import { AuthService } from 'src/app/core/auth/auth.service'

@Component({
  selector: 'app-edit-path',
  templateUrl: './edit-path.component.html',
  styleUrls: ['./edit-path.component.css'],
})
export class EditPathComponent implements OnInit {
  courseName!: string
  containerPaths$ = new BehaviorSubject<IContainerPath[] | undefined>(undefined)

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: EditPathService,
    private ui: DialogService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.courseName = this.route.snapshot.queryParams['courseName']
    this.updatePath()
  }

  goBack() {
    this.location.back()
  }

  updatePath() {
    this.service
      .getContainerPaths(
        this.route.snapshot.params['courseId'],
        this.route.snapshot.params['studentId'] ||
          this.auth.currentUser$.value._id
      )
      .pipe(
        tap(console.log),
        tap((path) => this.containerPaths$.next(path)),
        catchError((err) => {
          this.ui.showToast('LernWeg konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
