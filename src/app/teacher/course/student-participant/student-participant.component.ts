import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { StudentParticipantService } from './student-participant.service'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import {
  IContainer,
  IRef,
  IStudentParticipant,
} from 'src/app/shared/utils/interfaces'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-student-participant',
  templateUrl: './student-participant.component.html',
  styles: [],
})
export class StudentParticipantComponent implements OnInit {
  participant$ = new BehaviorSubject<IStudentParticipant | undefined>(undefined)
  id: number
  name: string
  courseId: number
  courseName: string

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private service: StudentParticipantService,
    private uiService: DialogService,
    private dialog: MatDialog
  ) {
    this.id = this.route.snapshot.params['id']
    this.courseId = this.route.snapshot.params['courseId']
    this.name = this.route.snapshot.queryParams['name']
    this.courseName = this.route.snapshot.queryParams['courseName']
  }

  commitContainer(container: IRef) {}

  navigateBack() {
    this.router.navigate(['teacher', 'courses', this.courseId], {
      queryParams: { name: this.courseName },
    })
  }

  ngOnInit(): void {
    this.service
      .getStudent(this.id, this.courseId)
      .pipe(
        tap((student) => this.participant$.next(student)),
        catchError((err) => {
          this.uiService.showToast('Schüler konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
