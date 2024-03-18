import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IStudyJob } from 'src/app/shared/utils/interfaces'
import { IStudyPath, StudyPathService } from './study-path.service'
import { BehaviorSubject } from 'rxjs'
// import { IStudyPath } from 'src/app/trash/study-path/study-path.service'

@Component({
  selector: 'app-study-path',
  templateUrl: './study-path.component.html',
  styles: [],
})
export class StudyPathComponent {
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

  navigateToJob(job: IStudyJob) {
    this.router.navigate(['teacher', 'study-jobs', job._id], {
      queryParams: {
        name: job.name,
      },
    })
  }
}
