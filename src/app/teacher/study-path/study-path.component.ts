import { Component, OnInit } from '@angular/core'
import { StudyPathService } from './study-path.service'
import { BehaviorSubject } from 'rxjs'
import { IStudyJobExpectation } from 'src/app/interfaces'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-study-path',
  templateUrl: './study-path.component.html',
  styleUrls: ['./study-path.component.css'],
})
export class StudyPathComponent implements OnInit {
  path$: BehaviorSubject<IStudyJobExpectation[] | undefined>
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

  editPath() {}
}
