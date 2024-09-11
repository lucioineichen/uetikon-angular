import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { catchError, map, mergeMap, tap } from 'rxjs'
import { FolderService } from './folder.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { NameService } from 'src/app/shared/ui/name/name.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent {
  get id(): number {
    return this.route.snapshot.params['id']
  }

  constructor(
    protected service: FolderService,
    private route: ActivatedRoute,
    private name: NameService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(tap((params) => this.service.update(params['id'])))
      .subscribe()
  }

  addJob() {
    this.name
      .name('LernJob Benennen')
      .pipe(
        filterNullish(),
        mergeMap((name) => this.service.postJob(this.id, name)),
        tap(() => this.service.update(this.id)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()
  }

  addFolder() {
    this.service.addFolder(this.id)
  }

  rename() {
    const folder = this.service.storeFolder$.value
    if (!folder) return
    this.name
      .name('Ordner Umbenennen', folder.name)
      .pipe(
        map((name) => (name == folder.name ? undefined : name)),
        filterNullish(),
        mergeMap((newName) =>
          this.service.putFolder(folder._id, { name: newName })
        ),
        tap(() => this.ngOnInit())
      )
      .subscribe()
  }
}
