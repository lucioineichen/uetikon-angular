import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ICompetence, IStudyJob } from 'src/app/interfaces'

@Component({
  selector: 'app-study-path-form',
  templateUrl: './study-path-form.component.html',
  styleUrls: ['./study-path-form.component.css'],
})
export class StudyPathFormComponent {
  selectedJobs: IStudyJob[]
  selectedCompetences: ICompetence[]

  constructor(
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
      jobs: this.selectedJobs,
      competences: this.selectedCompetences,
    }
  }
}
