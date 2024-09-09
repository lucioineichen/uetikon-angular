import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EditPathService } from './edit-path.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IContainerPath } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-edit-path',
  templateUrl: './edit-path.component.html',
  styleUrls: ['./edit-path.component.css'],
})
export class EditPathComponent implements OnInit {
  name!: string
  containerPaths$ = new BehaviorSubject<IContainerPath[] | undefined>(undefined)

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: EditPathService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams['name']
    this.updatePath()
  }

  goBack() {
    this.location.back()
  }

  private updatePath() {
    this.service
      .getContainerPaths(this.route.snapshot.params['id'])
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