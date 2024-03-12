import { IStudyJob } from 'src/app/shared/utils/interfaces'

export interface IStudyJobDisplay {
  jobId: number
  name: string
  competences: string[]
  subject: string
  isSelected: boolean
  job: IStudyJob
}

// export class StudyJobDisplay implements IStudyJobDisplay {
//   jobId: number
//   name: string
//   competences: string[]
//   subject: string
//   isSelected = false
//   job: IStudyJob

//   constructor(job: IStudyJob) {
//     this.jobId = job._id
//     this.name = job.name
//     this.competences = job.competences
//     this.subject = job.subject
//     this.job = job
//   }
// }
