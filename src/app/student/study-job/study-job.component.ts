import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject, catchError, mergeMap, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { StudyJobService } from './study-job.service'
import {
  IProgress,
  IStudyJob,
  ITaskProgress,
} from 'src/app/shared/utils/interfaces'
import { EnterTaskProgressService } from 'src/app/shared/ui/enter-task-progress/enter-task-progress.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { AddSubmissionService } from './add-submission/add-submission.service'

@Component({
  selector: 'app-study-job',
  templateUrl: './study-job.component.html',
  styleUrls: ['./study-job.component.css'],
})
export class StudyJobComponent implements OnInit {
  id!: number
  name!: string
  progress$ = new BehaviorSubject<IProgress | undefined>(undefined)

  constructor(
    private ui: DialogService,
    private route: ActivatedRoute,
    private location: Location,
    private service: StudyJobService,
    private enterProgessService: EnterTaskProgressService,
    private addSubmissionService: AddSubmissionService
  ) {}

  ngOnInit(): void {
    this.updateQueryInfo()
    this.updateProgress()
  }

  addSubmission(prog: ITaskProgress) {
    this.addSubmissionService
      .addSubmission(prog._id, prog.task.title)
      .pipe(tap(() => this.updateProgress()))
      .subscribe()
  }

  enterProgress(prog: ITaskProgress) {
    this.enterProgessService
      .enterTaskProgress(prog)
      .pipe(
        filterNullish(),
        mergeMap((data) => this.service.putTaskProgress(prog._id, data)),
        tap(() => this.updateProgress()),
        catchError((err) => {
          this.ui.showToast('Fortschritt konnte nicht übernommen werden')
          return err
        })
      )
      .subscribe()
  }

  goBack() {
    this.location.back()
  }

  private updateQueryInfo() {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
  }

  private updateProgress() {
    this.service
      .getProgress(this.id)
      .pipe(
        tap((progress) => this.progress$.next(progress)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
