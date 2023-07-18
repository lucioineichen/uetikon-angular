import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import {
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  tap,
  throwError,
} from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import { getNewFolderNumber } from 'src/app/folder'
import { IFolder, IStudyJob } from 'src/app/interfaces'

export interface IStudyJobsService {
  renamingFolder?: IFolder
  readonly tree$: ReplaySubject<IFolder>
  readonly addFolder$: Subject<void>
  renameFolder(folder: IFolder): Observable<IFolder>
  updaterepositoryTree(): void
  getStudyJobs(repoId: number): Observable<IStudyJob[]>
  createFolder(parentFolder: IFolder): Observable<IFolder>
  createStudyJob(data: any): Observable<IStudyJob>
}

@Injectable({
  providedIn: 'root',
})
export class StudyJobsService implements IStudyJobsService {
  readonly tree$ = new ReplaySubject<IFolder>(1)
  readonly addFolder$ = new Subject<void>()

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  renameFolder(folder: IFolder): Observable<IFolder> {
    return this.httpClient.put<IFolder>(
      `${environment.baseUrl}/teacher/folder/${folder._id}`,
      {
        name: folder.name,
      }
    )
  }

  createFolder(parentFolder: IFolder): Observable<IFolder> {
    const number =
      parentFolder.folders.reduce((previousValue, currentFolder) => {
        return getNewFolderNumber(currentFolder.name) > previousValue
          ? getNewFolderNumber(currentFolder.name)
          : previousValue
      }, 0) + 1

    const name = `Neuer Ordner (${number})`
    const parentId = parentFolder._id ? parentFolder._id : 0
    console.log({ name })

    return this.httpClient.post<IFolder>(
      `${environment.baseUrl}/teacher/folder/${parentId}/child-folders`,
      { name }
    )
  }

  private getRepositoryTree(): Observable<IFolder> {
    return this.httpClient.get<IFolder>(
      `${environment.baseUrl}/teacher/repository-folder-tree`
    )
  }

  getStudyJobs(repoId: number) {
    return this.httpClient.get<IStudyJob[]>(
      `${environment.baseUrl}/teacher/repository/${repoId}/study-jobs`
    )
  }

  updaterepositoryTree() {
    this.getRepositoryTree().subscribe({
      next: (tree) => this.tree$.next(tree),
      error: (err) => {
        this.uiService.showToast('LernJobs konnten nicht geladen werden')
        this.tree$.error(throwError(() => new Error('server 500')))
      },
    })
  }

  createStudyJob(data: any) {
    console.log(data)
    return this.httpClient.post<IStudyJob>(
      `${environment.baseUrl}/teacher/study-jobs`,
      data
    )
  }
}
