import { Component, OnInit } from '@angular/core'
import { StudyJobsService } from './study-jobs.service'
import { AddStudyJobService } from './add-study-job/add-study-job.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { tap } from 'rxjs'

@Component({
  selector: 'app-study-jobs',
  templateUrl: './study-jobs.component.html',
  styleUrls: ['./study-jobs.component.css'],
})
export class TeacherStudyJobsComponent implements OnInit {
  constructor(
    protected service: StudyJobsService,
    private addStudyJob: AddStudyJobService // private addFolder:
  ) {}

  ngOnInit(): void {
    this.service.update()
  }

  addJob() {
    this.addStudyJob
      .addJob()
      .pipe(tap(() => this.service.update()))
      .subscribe()
  }

  addFolder() {
    this.service.addFolder()
  }
}
