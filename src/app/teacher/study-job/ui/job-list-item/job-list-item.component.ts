import { Component, Input } from '@angular/core'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { StudyJobsService } from '../../study-job-list/study-jobs.service'
import { MatCheckboxChange } from '@angular/material/checkbox'

@Component({
  selector: 'app-job-list-item [job]',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css'],
})
export class JobListItemComponent {
  @Input() job!: IStudyJob
  readonly selected$ = this.service.selectedJobs$

  constructor(protected service: StudyJobsService) {}

  toggleSelection(event: MatCheckboxChange) {
    let isInList =
      this.selected$.value.findIndex((id) => id === this.job._id) !== -1
    if (event.checked && !isInList)
      this.selected$.next(this.selected$.value.concat(this.job._id))
    if (!event.checked && isInList)
      this.selected$.next(
        this.selected$.value.filter((id) => id !== this.job._id)
      )
  }
}
