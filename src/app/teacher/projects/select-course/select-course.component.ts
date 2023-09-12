import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'
import { ICourse } from 'src/app/interfaces'
import { SelectCourseService } from './select-course.service'
import { MatCheckboxChange } from '@angular/material/checkbox'

@Component({
  selector: 'app-select-course',
  template: `
    <mat-dialog-content
      class="mat-typography"
      style="width: 700px; height: 400px"
    >
      <h1>Kurs Auswählen</h1>
      <mat-form-field style="width: 100%">
        <input
          matInput
          [formControl]="searchControl"
          placeholder="Suche beim Namen"
        />
      </mat-form-field>

      <mat-grid-list
        cols="3"
        rowHeight="40px"
        *ngIf="filteredCourses$ | async as courses; else loading"
      >
        <mat-grid-tile *ngFor="let competence of courses">
          <mat-checkbox
            [checked]="isSelected(competence)"
            (change)="toggleSelection($event, competence)"
            style="width: 100% !important"
          >
            {{ competence.name }}
          </mat-checkbox>
        </mat-grid-tile>

        <div *ngIf="courses.length === 0">Es gibt noch keine Kurse</div>
      </mat-grid-list>

      <ng-template #loading> Lädt courses... </ng-template>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Abrechen</button>
      <button
        [disabled]="selectedCourse === undefined"
        mat-button
        [mat-dialog-close]="selectedCourse"
        cdkFocusInitial
      >
        Speichern
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
})
export class SelectCourseComponent {
  courses$: BehaviorSubject<ICourse[] | undefined>
  searchControl = new FormControl()
  filteredCourses$!: Observable<ICourse[]>
  selectedCourse?: ICourse

  constructor(
    private dialogRef: MatDialogRef<SelectCourseComponent>,
    private service: SelectCourseService
  ) {
    this.courses$ = this.service.courses$

    this.filteredCourses$ = combineLatest([
      this.courses$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        throttleTime(300),
        distinctUntilChanged()
      ),
    ]).pipe(
      map((value) => {
        return this.filterCourses(value[0], value[1])
      })
    )
  }

  ngOnInit(): void {
    this.service.updateCourses()
  }

  filterCourses(courses: ICourse[] | undefined, search: string): ICourse[] {
    if (!courses) return []
    search = search.toLowerCase()
    return courses.filter((course) => {
      return course.name.includes(search)
    })
  }

  toggleSelection(event: MatCheckboxChange, course: ICourse): void {
    if (event.checked) {
      this.selectedCourse = course
    } else {
      this.selectedCourse = undefined
    }
  }

  isSelected(course: ICourse): boolean {
    return this.selectedCourse?._id === course._id
  }
}
