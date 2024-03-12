import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ICompetence, IStudyJob } from 'src/app/shared/utils/interfaces'
import { SelectCompetencesService } from '../../select-competences-form/select-competences.service'
import { filter, mergeMap, tap } from 'rxjs'
import { StudyPathService } from '../study-path.service'
import { SelectJobsService } from '../../select-jobs/select-jobs.service'

@Component({
  selector: 'app-study-path-form',
  templateUrl: './study-path-form.component.html',
  styleUrls: ['./study-path-form.component.css'],
})
export class StudyPathFormComponent {
  selectedJobs: IStudyJob[]
  selectedCompetences: ICompetence[]

  constructor(
    private studyPathService: StudyPathService,
    private selectJobsService: SelectJobsService,
    private selectCompetencesService: SelectCompetencesService,
    @Inject(MAT_DIALOG_DATA)
    private data: {
      jobs: IStudyJob[]
      competences: ICompetence[]
    }
  ) {
    this.selectedJobs = data.jobs
    this.selectedCompetences = data.competences
  }

  pathData() {
    return {
      jobs: this.selectedJobs.map((com) => com._id),
      competences: this.selectedCompetences.map((com) => com._id),
    }
  }

  selectCompetences() {
    this.selectCompetencesService
      .selectCompetences(this.selectedCompetences)
      .pipe(
        filter((competences) => competences !== ''),
        tap((competences) => {
          this.selectedCompetences = competences as ICompetence[]
        })
      )
      .subscribe()
  }

  selectJobs() {
    this.selectJobsService
      .selectJobs(this.selectedJobs)
      .pipe(
        tap((jobs) => {
          console.log('new Jobs: ', jobs)
        }),
        filter((jobs) => jobs !== ''),
        tap((jobs) => {
          this.selectedJobs = [...(jobs as IStudyJob[])]
        })
      )
      .subscribe()
  }
}
