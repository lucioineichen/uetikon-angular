import { Component, OnDestroy, OnInit } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { IShareFolder } from '../study-job-list/study-jobs.service'
import { ShareFolderService } from './share-folder.service'
import { SubSink } from 'subsink'
import { ActivatedRoute } from '@angular/router'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IJobListItem } from '../ui/job-list-item/job-list-item.component'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { NameService } from 'src/app/shared/ui/name/name.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-share-folder',
  templateUrl: './share-folder.component.html',
  styleUrls: ['./share-folder.component.css'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          position: 'absolute',
          right: 0,
          top: '10px',
          width: '350px',
          transform: 'translateX(105%)',
          display: 'none',
        })
      ),
      state(
        'expanded',
        style({
          position: 'absolute',
          right: 0,
          top: '10px',
          width: '350px',
          transform: 'translateX(0)',
          display: 'block',
        })
      ),

      transition('collapsed => expanded', [animate('200ms ease-out')]),
      transition('expanded => collapsed', [animate('200ms ease-in')]),
    ]),
    trigger('expandCollapseIcon', [
      state(
        'collapsed',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'expanded',
        style({
          transform: 'rotate(30deg)',
        })
      ),

      transition('collapsed => expanded', [animate('200ms ease-out')]),
      transition('expanded => collapsed', [animate('200ms ease-in')]),
    ]),
  ],
})
export class ShareFolderComponent implements OnInit, OnDestroy {
  readonly sink = new SubSink()
  readonly shareFolder$ = new BehaviorSubject<IShareFolder | undefined>(
    undefined
  )
  readonly id$ = new BehaviorSubject<number | undefined>(undefined)
  readonly selectedJobList$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobList$.pipe(
    map((list) => list.length > 0)
  )
  readonly jobList$: Observable<IJobListItem[] | undefined> = combineLatest([
    this.shareFolder$.pipe(
      map((folder) => {
        const jobList = folder?.studyJobList
        return jobList?.map((job: any) => {
          const job_: IJobListItem = {
            _id: job._id,
            isSelected: false,
            isOneSelected: false,
            name: job.name,
            subject: job.subject,
            taskListLength: job.tasks.length,
          }
          return job_
        })
      })
    ),
    this.selectedJobList$,
  ]).pipe(
    map(([jobList, selectedJobList]) => {
      jobList?.forEach((job) => {
        job.isOneSelected = selectedJobList.length > 0
        job.isSelected = selectedJobList.findIndex((id) => id == job._id) != -1
      })
      return jobList
    })
  )
  readonly isShowGroupPermission$ = new BehaviorSubject<boolean>(false)

  constructor(
    protected service: ShareFolderService,
    private route: ActivatedRoute,
    private ui: DialogService,
    private name: NameService
  ) {}

  rename() {
    const folder = this.shareFolder$.value
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

  toggle() {
    this.isShowGroupPermission$.next(!this.isShowGroupPermission$.value)
  }

  ngOnInit(): void {
    this.updateFolder()
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }

  toggleSelection(isSelected: boolean, id: number) {
    if (isSelected) {
      this.selectedJobList$.next(this.selectedJobList$.value.concat(id))
    } else {
      this.selectedJobList$.next(
        this.selectedJobList$.value.filter((_id) => _id != id)
      )
    }
  }

  move() {}

  addJob() {
    const shareFolderId = this.id$.value
    if (!shareFolderId) return
    const sub = this.name
      .name('LernJob Benennen')
      .pipe(
        filterNullish(),
        mergeMap((name) =>
          this.service.postJob({
            name,
            saveAt: {
              shareFolderId,
              storeFolderId: null,
              toRoot: false,
            },
          })
        ),
        tap(() => this.updateFolder()),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()

    this.sink.add(sub)
  }

  addStoreFolder() {
    const shareFolderId = this.id$.value
    if (!shareFolderId) return
    const sub = this.name
      .name('Ordner Benennen')
      .pipe(
        filterNullish(),
        mergeMap((name) =>
          this.service.postFolder({
            name,
            saveAt: {
              shareFolderId,
              storeFolderId: null,
              toRoot: false,
            },
          })
        ),
        tap(() => this.updateFolder()),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()

    this.sink.add(sub)
  }

  private updateFolder() {
    const sub = this.route.params
      .pipe(
        tap((params) => this.id$.next(params['id'])),
        mergeMap((params) => this.service.getShareFolder(params['id'])),
        tap((folder) => this.shareFolder$.next(folder)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          this.shareFolder$.error(err)
          return err
        })
      )
      .subscribe()
    this.sink.add(sub)
  }
}
