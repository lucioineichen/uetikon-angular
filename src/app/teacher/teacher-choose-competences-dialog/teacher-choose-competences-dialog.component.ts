import { Component, Inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  Observable,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'
import { ICompetence } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatCheckboxChange } from '@angular/material/checkbox'

@Component({
  selector: 'app-teacher-choose-competences-dialog',
  templateUrl: './teacher-choose-competences-dialog.component.html',
  styles: [],
})
export class TeacherChooseCompetencesDialogComponent implements OnInit {
  competences$: Observable<ICompetence[]>
  searchControl = new FormControl()
  filteredCompetences$!: Observable<ICompetence[]>
  selectedCompetences: ICompetence[]

  constructor(
    private dialogRef: MatDialogRef<TeacherChooseCompetencesDialogComponent>,
    private teacherService: TeacherService,
    @Inject(MAT_DIALOG_DATA) public initialCompetences: ICompetence[]
  ) {
    this.selectedCompetences = [...initialCompetences]
    this.competences$ = this.teacherService.competences$
    this.teacherService.competences$.subscribe({
      error: () => this.dialogRef.close(),
    })

    this.filteredCompetences$ = combineLatest([
      this.competences$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        throttleTime(300),
        distinctUntilChanged()
      ),
    ]).pipe(
      map((value) => {
        return this.filterStudents(value[0], value[1])
      })
    )
  }

  ngOnInit(): void {
    this.teacherService.updateCompetences()
  }

  filterStudents(competences: ICompetence[], search: string): ICompetence[] {
    search = search.toLowerCase()
    return competences.filter((competence) => {
      return competence.name.includes(search)
    })
  }

  toggleSelection(event: MatCheckboxChange, competence: ICompetence): void {
    if (event.checked) {
      this.selectedCompetences.push(competence)
    } else {
      const index = this.selectedCompetences.findIndex(
        (selectedCompetence) => selectedCompetence._id === competence._id
      )
      if (index !== -1) {
        this.selectedCompetences.splice(index, 1)
      }
    }
  }

  isSelected(competence: ICompetence): boolean {
    return (
      this.selectedCompetences.findIndex(
        (selectedCompetence) => selectedCompetence._id === competence._id
      ) > -1
    )
  }

  save() {
    this.initialCompetences.splice(0)
    this.selectedCompetences.forEach((competence) =>
      this.initialCompetences.push(competence)
    )
  }
}
