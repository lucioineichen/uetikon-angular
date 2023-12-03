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
import { AddStudyJobService } from '../study-jobs/add-study-job/add-study-job.service'
import { FolderService } from './folder.service'

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
    private addStudyJob: AddStudyJobService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(tap((params) => this.service.update(params['id'])))
      .subscribe()
  }

  addJob() {
    this.addStudyJob
      .addJob()
      .pipe(tap(() => this.service.update(this.id)))
      .subscribe()
  }

  addFolder() {
    this.service.addFolder(this.id)
  }

  rename() {}
}
