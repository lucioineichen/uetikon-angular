import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  map,
  mergeMap,
  subscribeOn,
  tap,
} from 'rxjs'
import { Location } from '@angular/common'
import { JobService } from './job.service'
import { AddTaskService } from '../../shared/ui/add-task/add-task.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { ChangeStatusService } from '../ui/change-status/change-status.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { NameService } from 'src/app/shared/ui/name/name.service'
import { PickCompetenceListService } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.service'
import { ITask } from 'src/app/shared/utils/interfaces'
import { TaskFormService } from '../../shared/ui/task-form/task-form.service'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  readonly unsavedChanges$ = new BehaviorSubject<boolean>(false)
  jobInfoForm: FormGroup<{
    subject: FormControl<string | null>
    credits: FormControl<number | null>
    description: FormControl<string | null>
  }> = this.fb.group({
    subject: [''],
    credits: [0],
    description: [''],
  })
  job$ = this.service.job$

  get subjectControl() {
    return this.jobInfoForm.get('subject') as FormControl<number | null>
  }

  constructor(
    protected route: ActivatedRoute,
    private service: JobService,
    private addTaskService: AddTaskService,
    private location: Location,
    private changeStatusService: ChangeStatusService,
    private ui: DialogService,
    private nameService: NameService,
    private fb: FormBuilder,
    private pickCompetence: PickCompetenceListService,
    private editTaskService: TaskFormService
  ) {}

  editTask(task: ITask) {
    this.editTaskService
      .editTask(task)
      .pipe(
        filterNullish(),
        mergeMap((data) => this.service.putTask(task._id, data)),
        tap(() => this.update()),
        catchError((err) => {
          this.ui.showToast('Aufgabe konnte nicht angepasst werden')
          return err
        })
      )
      .subscribe()
  }

  deleteTask(task: ITask) {
    this.service
      .deleteTask(task._id)
      .pipe(
        tap(() => this.update()),
        catchError((err) => {
          this.ui.showToast('Aufgabe konnte nicht gelöscht werden')
          return err
        })
      )
      .subscribe()
  }

  publish() {
    const job = this.job$.value
    if (!job) return

    this.service
      .putJob(job._id, { isPublished: { value: true } })
      .pipe(
        tap(() => this.service.update(job._id)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht publiziert werden')
          return err
        })
      )
      .subscribe()
  }

  depublish() {
    const job = this.job$.value
    if (!job) return

    this.service
      .putJob(job._id, { isPublished: { value: false } })
      .pipe(
        tap(() => this.service.update(job._id)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht entpubliziert werden')
          return err
        })
      )
      .subscribe()
  }

  changeStatus() {
    const job = this.job$.value
    if (!job) return
    this.changeStatusService
      .changeStatus(job.status)
      .pipe(
        filterNullish(),
        mergeMap((status) => this.service.putJob(job._id, { status })),
        tap(() => this.service.update(job._id)),
        catchError((err) => {
          this.ui.showToast('Status konnte nicht geändert werden')
          return err
        })
      )
      .subscribe()
  }

  navigateBack() {
    this.location.back()
  }

  ngOnInit(): void {
    this.updateForm()
    this.update()
  }

  private update() {
    this.route.params
      .pipe(
        tap((params) => {
          this.service.update(params['id'])
        })
      )
      .subscribe()
  }

  saveInfo() {
    const job = this.job$.value
    if (!job) return
    if (!this.unsavedChanges$.value) return
    const info = this.jobInfoForm.value
    this.service
      .putJob(job._id, {
        description: info.description || undefined,
        credits: info.credits || undefined,
        subjectId: info.subject || undefined,
      })
      .pipe(
        tap(() => this.unsavedChanges$.next(false)),
        catchError((err) => {
          this.ui.showToast('LernJob Infos konnten nicht gespeichert werden')
          return err
        })
      )
      .subscribe()
  }

  pickCompetences() {
    const job = this.job$.value
    if (!job) return
    this.pickCompetence
      .pickCompetenceList(job.competences.map((comp) => comp._id))
      .pipe(
        filterNullish(),
        map((competenceList) => competenceList.map((comp) => comp._id)),
        mergeMap((competenceList) =>
          this.service.putJob(job._id, { competenceList })
        ),
        tap(() => this.service.update(job._id)),
        catchError((err) => {
          this.ui.showToast('Kompetenzen konnten nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()
  }

  private updateForm() {
    this.job$
      .pipe(
        filterNullish(),
        tap((job) => {
          this.jobInfoForm.setValue({
            subject: job.subject?._id || null,
            credits: job.credits,
            description: job.notes || null,
          })
          this.unsavedChanges$.next(false)
        })
      )
      .subscribe()
    this.jobInfoForm.valueChanges
      .pipe(tap(() => this.unsavedChanges$.next(true)))
      .subscribe()
  }

  addTask() {
    const job = this.job$.value
    if (!job) return

    this.addTaskService
      .addTask(job._id)
      .pipe(
        filterNullish(),
        tap(() => this.service.update(job._id)),
        catchError((err) => {
          this.ui.showToast('Aufgabe Konnte nicht Hinzugefügt werden')
          return err
        })
      )
      .subscribe()
  }

  rename() {
    const job = this.job$.value
    if (!job) return

    this.nameService
      .name('LernJob Umbenennen', job.name)
      .pipe(
        mergeMap((name) => this.service.putJob(job._id, { name })),
        tap(() => this.service.update(job._id)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht umbenannt werden')
          return err
        })
      )
      .subscribe()
  }

  delete() {
    const job = this.job$.value
    if (!job) return
    this.ui
      .confirmDeletion('LernJob', job.name)
      .pipe(
        filter((confirmed) => confirmed),
        mergeMap(() => this.service.deleteJob(job._id)),
        tap(() => this.navigateBack())
      )
      .subscribe()
  }

  selectCompetences() {}
}
