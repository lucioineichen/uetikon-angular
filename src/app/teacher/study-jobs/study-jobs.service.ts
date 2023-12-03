import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  map,
  mergeMap,
  tap,
  throwError,
} from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { getNewFolderNumber } from 'src/app/folder'
import { IFolder, IRef, IStudyJob, ITask } from 'src/app/interfaces'
import { FolderService } from './folder/folder.service'
import { RenameFolderService } from 'src/app/ui/rename-folder/rename-folder.service'
import { filterNullish } from 'src/app/common/common'

// export class SelectJob implements IStudyJob {
//   private _isSelected = false
//   get isSelected() {
//     return this._isSelected
//   }
//   set isSelected(value: boolean) {
//     if (value && !this.isSelected) {
//       this.isSelected = true
//       StudyJobsService.selectedCount++
//     }

//     if (!value && this.isSelected) {
//       this.isSelected = false
//       StudyJobsService.selectedCount--
//     }
//   }

//   constructor(
//     public _id: number,
//     public name: string,
//     public competences: string[],
//     public subject: string,
//     public tasks: ITask[],
//     public notes?: string
//   ) {}

//   static Build(job: IStudyJob) {
//     return new SelectJob(
//       job._id,
//       job.name,
//       job.competences,
//       job.subject,
//       job.tasks,
//       job.notes
//     )
//   }
// }

// class SelectableFolder implements IFolder {
//   constructor(
//     public _id: number,
//     public name: string,
//     public folders: IRef[],
//     public studyJobs: SelectJob[],
//     public path: IRef[]
//   ) {}

//   static Build(folder: IFolder) {
//     return new SelectableFolder(
//       folder._id,
//       folder.name,
//       folder.folders,
//       folder.studyJobs.map(SelectJob.Build),
//       folder.path
//     )
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class StudyJobsService {
  readonly root$ = new BehaviorSubject<IFolder | undefined>(undefined)
  readonly selectedJobs$ = new BehaviorSubject<number[]>([])
  readonly isOneSelected$ = this.selectedJobs$.pipe(
    map((selected) => selected.length > 0)
  )

  constructor(
    private http: HttpClient,
    private ui: UiService,
    private renameFolder: RenameFolderService
  ) {}

  private getRoot(): Observable<IFolder> {
    return this.http.get<IFolder>(
      `${environment.baseUrl}/teacher/study-jobs/root`
    )
  }

  update() {
    this.getRoot()
      .pipe(
        tap((root) => this.root$.next(root)),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht geladen werden')
          this.root$.error(err)
          return err
        })
      )
      .subscribe()
  }

  addFolder() {
    this.renameFolder
      .renameFolder()
      .pipe(
        filterNullish(),
        mergeMap((name) => this.postFolder({ name })),
        tap(() => this.update()),
        catchError((err) => {
          this.ui.showToast('Ordner konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  private postFolder(data: any) {
    return this.http.post<{}>(`${environment.baseUrl}/teacher/folders`, data)
  }
}
