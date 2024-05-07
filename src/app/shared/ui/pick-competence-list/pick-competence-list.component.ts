import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl } from '@angular/forms'
import {
  IPickCompetence,
  PickCompetenceListService,
} from './pick-competence-list.service'
import { SubSink } from 'subsink'
import { tap } from 'rxjs'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-pick-competence-list',
  templateUrl: './pick-competence-list.component.html',
  styleUrls: ['./pick-competence-list.component.css'],
})
export class PickCompetenceListComponent implements OnInit, OnDestroy {
  readonly sink = new SubSink()
  readonly subjectControl = new FormControl<string>('')

  constructor(
    protected service: PickCompetenceListService,
    @Inject(MAT_DIALOG_DATA) private data: { selectedList: string[] }
  ) {}

  ngOnInit(): void {
    this.initalizeSubjectList(this.data.selectedList)
    this.listenToSubjectChanges()
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }

  openSubject(subjectId: string) {
    this.subjectControl.patchValue(subjectId)
  }

  private initalizeSubjectList(selectedList: string[]) {
    const sub = this.service
      .getSubjectList()
      .pipe(
        tap((subjectList) => {
          if (selectedList.length == 0) return
          const competenceList = this.service.extractCompetenceList(subjectList)
          const selectedCompetenceList: IPickCompetence[] = []
          for (let competence of competenceList) {
            if (
              selectedList.findIndex((compId) => compId == competence._id) >= 0
            ) {
              competence.isSelected = true
              selectedCompetenceList.push(competence)
            }
          }
          this.service.selectedCompetenceList$.next(selectedCompetenceList)
        }),
        tap((subjectList) => this.service.subjectList$.next(subjectList))
      )
      .subscribe()
    this.sink.add(sub)
  }

  private listenToSubjectChanges() {
    this.subjectControl.valueChanges
      .pipe(tap((subject) => this.service.updateSelectedSubject(subject)))
      .subscribe()
  }
}
