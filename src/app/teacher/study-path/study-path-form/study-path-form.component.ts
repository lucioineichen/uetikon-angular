import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ICompetence, IStudyJob } from 'src/app/interfaces'
import { SelectCompetencesService } from '../../select-competences-form/select-competences.service'
import { filter, mergeMap, tap } from 'rxjs'
import { StudyPathService } from '../study-path.service'

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
      .selectCompetences()
      .pipe(
        filter((competences) => competences != undefined),
        tap((competences) => {
          this.selectedCompetences = competences as ICompetence[]
        })
      )
      .subscribe()
  }

  selectJobs() {}
}
