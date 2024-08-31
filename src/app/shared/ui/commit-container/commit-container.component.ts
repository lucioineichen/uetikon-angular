import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  startWith,
  tap,
} from 'rxjs'
import {
  ICompetence,
  IContainer,
  IRef,
  IStudyJob,
} from '../../utils/interfaces'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CommitContainerService } from './commit-container.service'
import { DialogService } from '../dialogs/ui.service'
import { SubSink } from 'subsink'
import { ChooseJobService } from 'src/app/teacher/shared/ui/choose-job/choose-job.service'
import { filterNullish } from '../../utils/filternullish'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-commit-container',
  templateUrl: './commit-container.component.html',
  styleUrls: ['./commit-container.component.css'],
})
export class CommitContainerComponent implements OnInit, OnDestroy {
  readonly sink = new SubSink()
  data: { containerId: number; studentId: number; courseId: number } =
    inject(MAT_DIALOG_DATA)
  container$ = new BehaviorSubject<IContainer | undefined>(undefined)
  studyJobList$ = new BehaviorSubject<IStudyJob[]>([]) // for competences container
  jobChoiceControl = new FormControl<number | null>(null) // for choice container
  isCommitable$ = combineLatest([
    this.container$,
    this.studyJobList$,
    this.jobChoiceControl.valueChanges.pipe(
      map((job) => {
        if (job == null) return undefined
        return job
      }),
      startWith(undefined)
    ),
  ]).pipe(
    map(([container, jobList, job]) => {
      if (!container) return false
      return this.isCommitable(container, jobList, job)
    })
  )

  constructor(
    private service: CommitContainerService,
    private ui: DialogService,
    private chooseJob: ChooseJobService
  ) {}

  addJob() {
    const sub = this.chooseJob
      .chooseJob()
      .pipe(
        filterNullish(),
        tap((job) => {
          const jobList = this.studyJobList$.value
          if (!jobList) return
          if (jobList.findIndex((_job) => _job._id == job._id) > -1) return
          this.studyJobList$.next(jobList.concat(job))
        })
      )
      .subscribe()

    this.sink.add(sub)
  }

  ngOnInit(): void {
    this.updateContainer()
  }

  private updateContainer() {
    this.service
      .getContainer(this.data.containerId)
      .pipe(
        tap((container) => this.container$.next(container)),
        catchError((err) => {
          this.ui.showToast('Container konnte nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  commit() {
    const studyJobList = this.studyJobList$.value
    const studyJob_ = this.jobChoiceControl.value
    let studyJob = undefined
    if (studyJob_ != null) studyJob = studyJob_
    if (!studyJobList) return
    this.service
      .commit(
        this.data.studentId,
        this.data.containerId,
        this.data.courseId,
        studyJobList.map((job) => job._id),
        studyJob
      )
      .subscribe()
  }

  private extractCompetences(studyJobList: IStudyJob[]) {
    const competences: ICompetence[] = []
    for (let job of studyJobList) {
      competences.push(...job.competences)
    }
    return competences
  }

  private isCommitable(
    container: IContainer,
    studyJobList: IStudyJob[],
    studyJob: number | undefined
  ) {
    console.log('check is commitable')
    if (container.mandetoryJob) return true
    if (container.jobChoices) return studyJob != undefined

    const competences = this.extractCompetences(studyJobList)
    for (let necessairyCompetence of container.necessairyCompetences) {
      if (
        competences.findIndex(
          (selectedCompetence) =>
            selectedCompetence._id == necessairyCompetence._id
        ) == -1
      )
        return false
    }
    return true
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
