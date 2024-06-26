import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, tap } from 'rxjs'
import { SelectSubjectService } from './select-subject.service'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-select-subject',
  template: `
    <mat-form-field style="width: 100%" appearance="outline">
      <mat-label>Wähle ein Fach</mat-label>
      <mat-select [formControl]="control" ngDefaultControl name="fieldName">
        <mat-option [value]="undefined">Alle</mat-option>
        <mat-option
          *ngFor="let subject of subjectList$ | async"
          [value]="subject._id"
          >{{ subject.name }}</mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class SelectSubjectComponent implements OnInit, OnDestroy {
  @Input('form-control') control!: FormControl
  readonly sink = new SubSink()

  readonly subjectList$ = new BehaviorSubject<{ _id: string; name: string }[]>(
    []
  )

  constructor(private service: SelectSubjectService) {}

  private initSubjectList() {
    const sub = this.service
      .getSubjectList()
      .pipe(tap((list) => this.subjectList$.next(list)))
      .subscribe()
    this.sink.add(sub)
  }

  ngOnInit(): void {
    console.log('can you read this')
    console.log(this.control)
    this.initSubjectList()
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
