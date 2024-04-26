import { Component, OnDestroy, OnInit } from '@angular/core'
import { SubSink } from 'subsink'
import {
  IPickSubject,
  PickCompetenceListService,
} from '../pick-competence-list.service'
import { BehaviorSubject, tap } from 'rxjs'

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styles: [],
})
export class AllSubjectsComponent implements OnInit, OnDestroy {
  readonly sink = new SubSink()
  readonly subjectList$ = new BehaviorSubject<undefined | IPickSubject[]>(
    undefined
  )

  constructor(protected service: PickCompetenceListService) {}

  private initSubjects() {
    const sub = this.service.subjectList
      .pipe(tap((subjectList) => this.subjectList$.next(subjectList)))
      .subscribe()

    this.sink.add(sub)
  }

  ngOnInit(): void {
    this.initSubjects()
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }
}
