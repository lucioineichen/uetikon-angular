import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { tap } from 'rxjs'
import { AddStudyJobService } from '../ui/add-study-job/add-study-job.service'
import { FolderService } from './folder.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent {
  get id(): number {
    return this.route.snapshot.params['id']
  }

  constructor(
    protected service: FolderService,
    private addStudyJob: AddStudyJobService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(tap((params) => this.service.update(params['id'])))
      .subscribe()
  }

  addJob() {
    this.addStudyJob
      .addJob()
      .pipe(tap(() => this.service.update(this.id)))
      .subscribe()
  }

  addFolder() {
    this.service.addFolder(this.id)
  }

  rename() {}
}
