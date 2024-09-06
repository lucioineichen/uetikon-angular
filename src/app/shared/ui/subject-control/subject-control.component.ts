import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IRawSubject } from '../../data/competences_data/competences-data.service'
import { SubjectControlService } from './subject-control.service'
import { DialogService } from '../dialogs/ui.service'

@Component({
  selector: 'app-subject-control [control]',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Wähle Fach</mat-label>
      <mat-select [formControl]="control">
        <mat-option>Alle</mat-option>
        <mat-option
          *ngFor="let subject of subjectList$ | async"
          [value]="subject._id"
          >{{ subject.short }}</mat-option
        >
      </mat-select>
      <mat-option *ngIf="!(subjectList$ | async)">Lädt Fächer...</mat-option>
    </mat-form-field>
  `,
})
export class SubjectControlComponent implements OnInit {
  @Input() control!: FormControl
  subjectList$ = new BehaviorSubject<IRawSubject[] | undefined>(undefined)

  constructor(
    private service: SubjectControlService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.updateSubjects()
  }

  private updateSubjects() {
    this.service
      .getSubjectList()
      .pipe(
        tap((list) => this.subjectList$.next(list)),
        catchError((err) => {
          this.ui.showToast('Fächer konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
