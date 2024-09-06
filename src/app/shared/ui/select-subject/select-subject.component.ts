import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { SelectSubjectService } from './select-subject.service'
import { SubSink } from 'subsink'
import { ISubject } from '../../data/competences_data/competences.data'
import { IRawSubject } from '../../data/competences_data/competences-data.service'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogService } from '../dialogs/ui.service'
import { filterNullish } from '../../utils/filternullish'

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.html',
  styles: [],
})
export class SelectSubjectComponent implements OnInit, OnDestroy {
  subjectControl = new FormControl<IRawSubject | null>(
    null,
    Validators.required
  )
  readonly sink = new SubSink()

  readonly subjectList$ = new BehaviorSubject<IRawSubject[]>([])

  constructor(
    private service: SelectSubjectService,
    @Inject(MAT_DIALOG_DATA) private initSubject: string | undefined,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.initSubjectList()
    this.initForm()
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }

  private initForm() {
    if (this.initSubject)
      this.subjectList$
        .pipe(
          filterNullish(),
          map((list) => list.find((subj) => subj._id == this.initSubject)),
          filterNullish(),
          tap((subj) => this.subjectControl.setValue(subj))
        )
        .subscribe()
  }

  private initSubjectList() {
    const sub = this.service
      .getSubjectList()
      .pipe(
        tap((list) => this.subjectList$.next(list)),
        catchError((err) => {
          this.ui.showToast('Fächer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
    this.sink.add(sub)
  }
}
