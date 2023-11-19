import { Component, Inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs'
import { ICompetence, IStudyJob } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { SelectCompetencesService } from './select-competences.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-select-competences',
  templateUrl: './select-competences-form.component.html',
  styles: [],
})
export class SelectCompetencesComponent {
  competences$: BehaviorSubject<ICompetence[] | undefined>
  searchControl = new FormControl()
  filteredCompetences$!: Observable<ICompetence[]>
  selectedCompetences: ICompetence[]

  constructor(
    private service: SelectCompetencesService,
    @Inject(MAT_DIALOG_DATA) public initialCompetences: ICompetence[]
  ) {
    this.selectedCompetences = [...initialCompetences]
    this.competences$ = this.service.competences$

    this.filteredCompetences$ = combineLatest([
      this.competences$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        throttleTime(300),
        distinctUntilChanged()
      ),
    ]).pipe(
      map((value) => {
        return this.filterCompetences(value[0], value[1])
      })
    )
  }

  filterCompetences(
    competences: ICompetence[] | undefined,
    search: string
  ): ICompetence[] {
    if (!competences) return []
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
