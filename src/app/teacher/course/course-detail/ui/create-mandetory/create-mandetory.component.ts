import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { tap } from 'rxjs'
import { CreateMandetoryService } from './create-mandetory.service'

@Component({
  selector: 'app-create-mandetory',
  templateUrl: './create-mandetory.component.html',
  styleUrls: ['./create-mandetory.component.css'],
})
export class CreateMandetoryComponent implements OnInit {
  job$ = this.service.job$

  constructor(
    private route: ActivatedRoute,
    private service: CreateMandetoryService
  ) {}

  chooseJob() {
    this.service.chooseJob()
  }

  addDepended() {
    this.service.chooseDepended()
  }

  ngOnInit(): void {
    this.route.params.pipe(tap(console.log)).subscribe()
  }
}
