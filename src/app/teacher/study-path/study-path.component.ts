import { Component, OnInit } from '@angular/core'
import { IStudyPath, StudyPathService } from './study-path.service'
import { BehaviorSubject } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-study-path',
  templateUrl: './study-path.component.html',
  styleUrls: ['./study-path.component.css'],
})
export class StudyPathComponent implements OnInit {
  path$: BehaviorSubject<IStudyPath | undefined>
  id: number

  constructor(
    private studyPathservice: StudyPathService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id']
    this.path$ = this.studyPathservice.path$
  }

  ngOnInit(): void {
    this.studyPathservice.updatePath(this.id)
  }

  editPath() {
    this.studyPathservice.editPath(this.id)
  }
}
