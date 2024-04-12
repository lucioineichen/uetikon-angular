import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { StudentParticipantService } from './student-participant.service'
import { IFile } from 'src/app/shared/utils/interfaces'
import { Location } from '@angular/common'

@Component({
  selector: 'app-student-participant',
  templateUrl: './student-participant.component.html',
  styles: [],
})
export class StudentParticipantComponent implements OnInit {
  id: number
  name: string
  courseId: number
  courseName: string

  file: IFile = {
    extension: 'pdf',
    name: 'Essay_Studienstiftung_eUFi0uq.pdf',
    url: 'http://127.0.0.1:8000/download/Essay_Studienstiftung_eUFi0uq.pdf',
  }

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private service: StudentParticipantService,
    private location: Location
  ) {
    this.id = this.route.snapshot.params['id']
    this.courseId = this.route.snapshot.params['courseId']
    this.name = this.route.snapshot.queryParams['name']
    this.courseName = this.route.snapshot.queryParams['courseName']
  }

  navigateBack() {
    this.router.navigate(['teacher', 'courses', this.courseId], {
      queryParams: { name: this.courseName },
    })
  }

  delete() {}

  ngOnInit(): void {
    this.service.updatePath(this.id, this.courseId)
  }
}
