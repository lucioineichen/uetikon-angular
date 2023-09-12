import { Component, Inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'
import { IStudyJob } from 'src/app/interfaces'
import { SelectJobsService } from './select-jobs.service'
import { MatCheckboxChange } from '@angular/material/checkbox'

@Component({
  selector: 'app-select-jobs',
  templateUrl: './select-jobs.component.html',
  styleUrls: ['./select-jobs.component.css'],
})
export class SelectJobsComponent {
  jobs$: BehaviorSubject<IStudyJob[] | undefined>
  searchControl = new FormControl()
  filteredJobs$!: Observable<IStudyJob[]>
  selectedJobs: IStudyJob[]

  constructor(
    private dialogRef: MatDialogRef<SelectJobsComponent>,
    private service: SelectJobsService,
    @Inject(MAT_DIALOG_DATA) private initialJobs: IStudyJob[]
  ) {
    this.selectedJobs = [...initialJobs]
    this.jobs$ = this.service.jobs$

    this.filteredJobs$ = combineLatest([
      this.jobs$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        throttleTime(300),
        distinctUntilChanged()
      ),
    ]).pipe(
      map((value) => {
        return this.filterJobs(value[0], value[1])
      })
    )
  }

  ngOnInit(): void {
    this.service.updateJobs()
  }

  filterJobs(jobs: IStudyJob[] | undefined, search: string): IStudyJob[] {
    if (!jobs) return []
    search = search.toLowerCase()
    return jobs.filter((job) => {
      return job.name.includes(search)
    })
  }

  toggleSelection(event: MatCheckboxChange, job: IStudyJob): void {
    if (event.checked) {
      this.selectedJobs.push(job)
    } else {
      console.log('job: ', job, 'selectedJobs: ', this.selectedJobs)
      const index = this.selectedJobs.findIndex(
        (selectedJob) => selectedJob._id === job._id
      )
      if (index !== -1) {
        this.selectedJobs.splice(index, 1)
      }
    }
  }

  debuggin() {
    console.log(this.selectedJobs)
    return this.selectedJobs
  }

  isSelected(job: IStudyJob): boolean {
    return (
      this.selectedJobs.findIndex(
        (selectedJob) => selectedJob._id === job._id
      ) > -1
    )
  }
}
