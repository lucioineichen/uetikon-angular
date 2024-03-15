import { Component, OnInit } from '@angular/core'
import { SubjectsService } from './subjects.service'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class TeacherSubjectSelectorComponent implements OnInit {
  constructor(protected service: SubjectsService) {}

  ngOnInit(): void {
    this.service.updateSubjects()
  }
}
