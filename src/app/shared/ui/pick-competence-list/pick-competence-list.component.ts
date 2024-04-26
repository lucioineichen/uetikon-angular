import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { BehaviorSubject, tap } from 'rxjs'
import {
  IPickSubject,
  PickCompetenceListService,
} from './pick-competence-list.service'
import { SubSink } from 'subsink'

@Component({
  selector: 'app-pick-competence-list',
  templateUrl: './pick-competence-list.component.html',
  styleUrls: ['./pick-competence-list.component.css'],
})
export class PickCompetenceListComponent {
  readonly sink = new SubSink()
  readonly subjectControl = new FormControl<string>('')
  readonly searchControl = new FormControl<string>('')

  constructor(
    private fb: FormBuilder,
    private service: PickCompetenceListService
  ) {}
}
