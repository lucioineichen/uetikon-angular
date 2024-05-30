import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, mergeMap, tap } from 'rxjs'
import { FolderService } from './folder.service'
import { NameService } from 'src/app/shared/ui/name/name.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'

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
    private nameService: NameService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(tap((params) => this.service.update(params['id'])))
      .subscribe()
  }

  addJob() {
    throw Error('not implemented')
  }

  addFolder() {
    this.service.addFolder(this.id)
  }

  rename() {
    const folder = this.service.storeFolder$.value
    if (!folder) return
    this.nameService
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
