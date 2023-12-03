import { Component, OnInit } from '@angular/core'
import { AddUfkService } from '../add-ufk.service'
import { SubjectsService } from './subjects.service'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  constructor(protected service: SubjectsService) {}

  ngOnInit(): void {
    this.service.updateSubjects()
  }
}
