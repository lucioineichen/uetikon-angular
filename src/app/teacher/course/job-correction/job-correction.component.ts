import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IProgress } from 'src/app/shared/utils/interfaces'
import { JobCorrectionService } from './job-correction.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-job-correction',
  templateUrl: './job-correction.component.html',
  styleUrls: ['./job-correction.component.css'],
})
export class JobCorrectionComponent implements OnInit {
  progress$ = new BehaviorSubject<IProgress | undefined>(undefined)
  studentName!: string
  jobName!: string

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: JobCorrectionService,
    private ui: DialogService
  ) {}

  goBack() {
    this.location.back()
  }

  ngOnInit() {
    this.studentName = this.route.snapshot.queryParams['studentName']
    this.jobName = this.route.snapshot.queryParams['jobName']

    this.updateProgress()
  }

  private updateProgress() {
    this.service
      .getProgress(
        this.route.snapshot.params['studentId'],
        this.route.snapshot.params['jobId']
      )
      .pipe(
        tap((prog) => this.progress$.next(prog)),
        catchError((err) => {
          this.ui.showToast('Job konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
