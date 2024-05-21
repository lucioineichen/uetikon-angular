import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, combineLatest, map, startWith, tap } from 'rxjs'
import { SubSink } from 'subsink'
import { ChooseTeacherService } from './choose-teacher.service'
import { filterNullish } from '../../utils/filternullish'
import { IRef } from '../../utils/interfaces'

@Component({
  selector: 'app-choose-teacher',
  template: `
    <form>
      <mat-form-field style="width: 100%;">
        <mat-label>Lehrer</mat-label>

        <input
          matInput
          aria-label="Lehrer"
          [matAutocomplete]="auto"
          [formControl]="teacherCtrl"
          class="input"
        />
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option
            *ngFor="let teacher of filteredTeacherList$ | async"
            value=""
            (click)="add(teacher)"
          >
            {{ teacher.name | titlecase }}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
    <mat-chip
      class="teacher-chip"
      *ngFor="let teach of selectedTeacherList$ | async"
      >{{ teach.name
      }}<button
        matChipRemove
        [attr.aria-label]="'remove ' + teach.name"
        (click)="remove(teach)"
      >
        <mat-icon>cancel</mat-icon>
      </button></mat-chip
    >
  `,
  styles: [
    `
      .teacher-chip {
        margin-right: 5px;
        margin-bottom: 5px;
      }
    `,
    `
      .input {
        width: 100%;
      }
    `,
  ],
})
export class ChooseTeacherComponent implements OnInit, OnDestroy {
  @Input('teacher-list$') selectedTeacherList$!: BehaviorSubject<IRef[]>
  readonly sink = new SubSink()
  readonly teacherCtrl = new FormControl<string>('')
  readonly filteredTeacherList$ = new BehaviorSubject<IRef[] | undefined>(
    undefined
  )

  add(teach: IRef) {
    this.selectedTeacherList$.next(
      this.selectedTeacherList$.value.concat(teach)
    )
  }

  remove(teacher: IRef) {
    this.selectedTeacherList$.next(
      this.selectedTeacherList$.value.filter(
        (teach) => teach._id != teacher._id
      )
    )
  }

  constructor(private service: ChooseTeacherService) {}

  ngOnInit(): void {
    const sub = combineLatest([
      this.service.getTeacherList(),
      this.selectedTeacherList$,
      this.teacherCtrl.valueChanges.pipe(startWith(''), filterNullish()),
    ])
      .pipe(
        map(([teacherList, selected, search]) => {
          search = search.toLocaleLowerCase()
          return teacherList
            .filter(
              (teacher) =>
                teacher.name.toLocaleLowerCase().includes(search) &&
                !selected.find((teach) => teach._id == teacher._id)
            )
            .slice(0, 4)
        }),
        tap((filteredTeacherList) =>
          this.filteredTeacherList$.next(filteredTeacherList)
        )
      )
      .subscribe()

    this.sink.add(sub)
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
