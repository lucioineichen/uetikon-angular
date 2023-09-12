import { Component, OnInit } from '@angular/core'
import { IStudyPath, StudyPathService } from './study-path.service'
import { BehaviorSubject } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { IStudyJob } from 'src/app/interfaces'

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
    private route: ActivatedRoute,
    private router: Router
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

  navigateToJob(job: IStudyJob) {
    this.router.navigate(['teacher', 'study-jobs', job._id], {
      queryParams: {
        name: job.name,
      },
    })
  }
}
