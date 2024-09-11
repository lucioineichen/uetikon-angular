import { Component, OnInit } from '@angular/core'
import { StudyJobsService } from './study-jobs.service'
import { AddStudyJobService } from '../ui/add-study-job/add-study-job.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { catchError, mergeMap, tap } from 'rxjs'
import { NameService } from 'src/app/shared/ui/name/name.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-study-jobs',
  templateUrl: './study-jobs.component.html',
  styleUrls: ['./study-jobs.component.css'],
})
export class StudyJobListComponent implements OnInit {
  constructor(
    protected service: StudyJobsService,
    private addStudyJob: AddStudyJobService,
    private name: NameService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.service.update()
  }

  addJob() {
    this.name
      .name('LernJob Benennen')
      .pipe(
        filterNullish(),
        mergeMap((name) => this.service.postJob(name)),
        tap(() => this.service.update()),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()
  }
}
