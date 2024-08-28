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
import { ActivatedRoute, Router } from '@angular/router'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IJobListItem } from '../ui/job-list-item/job-list-item.component'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { NameService } from 'src/app/shared/ui/name/name.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ChooseFolderService } from 'src/app/shared/ui/choose-folder/choose-folder.service'
import { ChooseTeacherService } from 'src/app/shared/ui/choose-teacher/choose-teacher.service'
import { ChooseTeacherDialogService } from 'src/app/shared/ui/choose-teacher-dialog/choose-teacher-dialog.service'
import { ITeacherPermission } from './participating-teacher-list/participating-teacher-list.component'
import { AuthService } from 'src/app/core/auth/auth.service'

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
  readonly teacherWriteList$ = new BehaviorSubject<ITeacherPermission[]>([])
  readonly teacherReadList$ = new BehaviorSubject<ITeacherPermission[]>([])
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
        return jobList?.map(IJobListItem.Build)
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
    private name: NameService,
    private chooseFolder: ChooseFolderService,
    private router: Router,
    private chooseTeacher: ChooseTeacherDialogService,
    private auth: AuthService
  ) {}

  changeTeacherPermission({
    isWrite,
    teacherId,
  }: {
    isWrite: boolean
    teacherId: number
  }) {
    const folder = this.shareFolder$.value
    if (!folder) return
    if (isWrite) {
      const teacherWriteList = folder.teacherWriteList
        .map((ref) => ref._id)
        .filter((id) => id != teacherId)
      const teacherReadList = folder.teacherReadList
        .map((ref) => ref._id)
        .concat(teacherId)

      this.service
        .putFolder(folder._id, { teacherWriteList, teacherReadList })
        .pipe(
          tap(() => this.updateFolder()),
          catchError((err) => {
            this.ui.showToast('Berechtigung konnte nicht geändert werden')
            return err
          })
        )
        .subscribe()
    } else {
      const teacherReadList = folder.teacherReadList
        .map((ref) => ref._id)
        .filter((id) => id != teacherId)
      const teacherWriteList = folder.teacherWriteList.map((ref) => ref._id)
      this.service
        .putFolder(folder._id, { teacherReadList, teacherWriteList })
        .pipe(
          tap(() => this.updateFolder()),
          catchError((err) => {
            this.ui.showToast('Berechtigung konnte nicht geändert werden')
            return err
          })
        )
        .subscribe()
    }
  }

  removeTeacher(removeData: { isWrite: boolean; teacherId: number }) {
    const folder = this.shareFolder$.value
    if (!folder) return
    if (removeData.isWrite) {
      const teacherWriteList = folder.teacherWriteList
        .map((ref) => ref._id)
        .filter((id) => id != removeData.teacherId)
      this.service
        .putFolder(folder._id, { teacherWriteList })
        .pipe(
          tap(() => this.updateFolder()),
          catchError((err) => {
            this.ui.showToast('Lehrer konnte nicht entfern werden')
            return err
          })
        )
        .subscribe()
    } else {
      const teacherReadList = folder.teacherReadList
        .map((ref) => ref._id)
        .filter((id) => id != removeData.teacherId)
      this.service
        .putFolder(folder._id, { teacherReadList })
        .pipe(
          tap(() => this.updateFolder()),
          catchError((err) => {
            this.ui.showToast('Lehrer konnte nicht entfern werden')
            return err
          })
        )
        .subscribe()
    }
  }

  addTeacher() {
    const folder = this.shareFolder$.value
    if (!folder) return
    this.chooseTeacher
      .chooseTeacherList()
      .pipe(
        filterNullish(),
        mergeMap((teacherList) => {
          teacherList = teacherList.filter(
            (teacher) =>
              folder.teacherReadList.findIndex(
                (read_teach) => read_teach._id == teacher._id
              ) == -1
          )
          teacherList = teacherList.concat(folder.teacherWriteList)
          let teacherIdList = teacherList.map((ref) => ref._id)
          teacherIdList = teacherIdList.filter(
            (value, index, array) => array.indexOf(value) === index
          )
          return this.service.putFolder(folder._id, {
            teacherWriteList: teacherIdList,
          })
        }),
        tap(() => this.updateFolder()),
        catchError((err) => {
          this.ui.showToast('Elemente konnten nicht verschoben werden')
          return err
        })
      )
      .subscribe()
  }

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
    this.shareFolder$
      .pipe(
        filterNullish(),
        tap((folder) => {
          const userId = this.auth.currentUser$.value._id
          const writeList = folder.teacherWriteList.map((ref) => {
            return {
              _id: ref._id,
              name: ref.name,
              isUser: ref._id == userId,
            }
          })
          const readList = folder.teacherReadList.map((ref) => {
            return {
              _id: ref._id,
              name: ref.name,
              isUser: ref._id == userId,
            }
          })
          this.teacherWriteList$.next(writeList)
          this.teacherReadList$.next(readList)
        })
      )
      .subscribe()
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

  move() {
    this.chooseFolder
      .chooseFolder()
      .pipe(
        map((folder) => {
          if (!folder || folder._id == this.shareFolder$.value?._id) {
            this.selectedJobList$.next([])
            return undefined
          }
          return folder
        }),
        filterNullish(),
        tap((folder) => {
          if (!folder._id) this.router.navigate(['teacher', 'study-jobs'])
          else if (folder.path)
            this.router.navigate([
              'teacher',
              'study-jobs',
              'folder',
              folder._id,
            ])
          else
            this.router.navigate([
              'teacher',
              'study-jobs',
              'share-folder',
              folder._id,
            ])
        }),
        mergeMap((folder) => {
          const saveAt = {
            toRoot: folder._id ? false : true,
            shareFolderId: folder.path ? null : folder._id || null,
            storeFolderId: folder.path ? folder._id || null : null,
          }
          const putJobRequestList = this.selectedJobList$.value.map((jobId) =>
            this.service.putJob(jobId, saveAt)
          )
          return combineLatest(putJobRequestList)
        }),
        catchError((err) => {
          this.ui.showToast('Elemente konnten nicht verschoben werden')
          return err
        })
      )
      .subscribe()
  }

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
