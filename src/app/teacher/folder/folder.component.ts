import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  catchError,
  filter,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { IFolder } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatDialog } from '@angular/material/dialog'
import { RenameFolderComponent } from 'src/app/ui/rename-folder/rename-folder.component'
import { UiService } from 'src/app/common/ui.service'
import { TeacherCreateStudyJobDialogComponent } from '../teacher-create-study-job-dialog/teacher-create-study-job-dialog.component'
import { StudyJobsService } from '../study-jobs/study-jobs.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent {
  id: number
  folder$ = new BehaviorSubject<IFolder>(undefined as unknown as IFolder)
  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
    private dialog: MatDialog,
    private uiService: UiService,
    private studyJobsService: StudyJobsService
  ) {
    this.id = this.route.snapshot.params['id']
    this.teacherService.getFolder(this.id).subscribe({
      next: (folder) => {
        this.folder$.next(folder)
      },
    })

    this.folder$.subscribe({
      next: console.info,
    })

    this.route.params
      .pipe(
        filter((params) => params['id'] !== this.id),
        tap((params) => (this.id = params['id'])),
        mergeMap(() => this.teacherService.getFolder(this.id)),
        tap((newFolder) => {
          this.folder$.next(newFolder)
        })
      )
      .subscribe()
  }

  openFolder(folder: IFolder) {}

  private navigateToParent() {
    const folder = this.folder$.value
    if (folder.path.length > 0) {
      this.router.navigate([
        'teacher',
        'study-jobs',
        'folder',
        folder.path[folder.path.length - 1]._id,
      ])
    } else this.router.navigate(['teacher', 'study-jobs'])
  }

  deleteFolder() {
    const folder = this.folder$.value
    this.uiService
      .confirmDeletion('Ordner', folder.name)
      .pipe(
        filter((isConfirmed) => isConfirmed),
        mergeMap(() => this.teacherService.deleteFolder(folder._id)),
        tap(() => this.navigateToParent()),
        catchError((err) => {
          this.uiService.showToast('Ordner konnte nicht gelöscht werden')
          return err
        })
      )
      .subscribe()
  }

  openStudyJobCreator() {
    const folder = this.folder$.getValue()
    const dialogRef = this.dialog.open(TeacherCreateStudyJobDialogComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data),
        mergeMap((data) =>
          this.studyJobsService.createStudyJob(data, folder._id)
        ),
        tap((studyJob) => folder.studyJobs.push(studyJob)),
        catchError((err) => {
          this.uiService.showToast('LernJob Konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  addFolder() {
    const folder = this.folder$.getValue()
    const dialogRef = this.dialog.open(RenameFolderComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filter((name) => name),
        mergeMap((name) => this.studyJobsService.createFolder(folder, name)),
        tap((newFolder) => {
          folder.folders.push(newFolder)
        }),
        catchError((err) => {
          this.uiService.showToast('Ordner konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  rename() {
    this.folder$.subscribe((folder) => {
      this.dialog
        .open(RenameFolderComponent, {
          data: folder.name,
        })
        .afterClosed()
        .pipe(
          filter((name) => name),
          mergeMap((name) => this.teacherService.renameFolder(folder, name)),
          tap((newFolder) => (folder.name = newFolder.name))
        )
        .subscribe()
    })
  }
}
