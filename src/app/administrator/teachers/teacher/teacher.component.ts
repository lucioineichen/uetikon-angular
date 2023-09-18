import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TeacherService } from './teacher.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  id: number
  name: string
  teacher$ = this.service.teacher$
  displayedColumns: string[] = ['name', 'read', 'write']

  constructor(private service: TeacherService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
  }

  ngOnInit(): void {
    this.service.updateTeacher(this.id)
  }
}
