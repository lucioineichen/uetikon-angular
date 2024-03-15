import { Component, OnInit } from '@angular/core'
import { StudentsService } from './students.service'

@Component({
  selector: 'app-select-ufk-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class TeacherStudentSelectorComponent implements OnInit {
  constructor(protected service: StudentsService) {}

  ngOnInit(): void {
    this.service.updateFavs()
  }
}
