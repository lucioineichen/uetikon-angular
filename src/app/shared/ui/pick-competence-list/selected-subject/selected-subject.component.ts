import { Component, OnInit } from '@angular/core'
import { PickCompetenceListService } from '../pick-competence-list.service'
import { FormControl } from '@angular/forms'
import { tap } from 'rxjs'

@Component({
  selector: 'app-selected-subject',
  template: `
    <mat-form-field style="width: 100%" appearance="outline">
      <mat-label>Suche Kompetenzen</mat-label>

      <input
        matInput
        [formControl]="searchControl"
        placeholder="Suche beim Namen"
      />
    </mat-form-field>

    <div *ngIf="!(service.filteredCompetenceList$ | async)">
      <mat-accordion *ngIf="subject$ | async as subject">
        <mat-expansion-panel *ngFor="let topic of subject.topicList">
          <mat-expansion-panel-header>
            <mat-panel-title> {{ topic.name }} </mat-panel-title>
          </mat-expansion-panel-header>
          <app-sub-topic
            *ngFor="let subTopic of topic.subTopicList"
            [sub-topic]="subTopic"
          ></app-sub-topic>
          <app-pick-competence
            *ngFor="let competence of topic.competenceList"
            [competence]="competence"
          ></app-pick-competence>
        </mat-expansion-panel>
      </mat-accordion>
    </div>

    <app-filtered-competence-list></app-filtered-competence-list>
  `,
  styles: [],
})
export class SelectedSubjectComponent implements OnInit {
  searchControl!: FormControl
  readonly subject$ = this.service.selectedSubject$

  constructor(protected service: PickCompetenceListService) {}

  ngOnInit(): void {
    this.searchControl = new FormControl<string>('')
    this.listenToSearch()
  }

  private listenToSearch() {
    this.searchControl.valueChanges
      .pipe(tap((change) => this.service.updateFilteredCompetenceList(change)))
      .subscribe()
  }
}
