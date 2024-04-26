import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { tap } from 'rxjs'
import { CreateMandetoryService } from './create-mandetory.service'

@Component({
  selector: 'app-create-mandetory',
  templateUrl: './create-mandetory.component.html',
  styleUrls: ['./create-mandetory.component.css'],
})
export class CreateMandetoryComponent implements OnInit {
  readonly job$ = this.service.job$
  readonly dependentContainer$ = this.service.dependentContainer$

  constructor(private service: CreateMandetoryService) {}

  ngOnInit(): void {
    this.job$.next(undefined)
    this.dependentContainer$.next(undefined)
  }

  chooseJob() {
    this.service.chooseJob()
  }

  addDepended() {
    this.service.chooseDependet(this.dependentContainer$.getValue())
  }

  removeDependent() {
    this.dependentContainer$.next(undefined)
  }
}
