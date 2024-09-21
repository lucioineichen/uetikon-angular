import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { StudentParticipantService } from './student-participant.service'
import { BehaviorSubject, catchError, map, mergeMap, tap } from 'rxjs'
import {
  IContainer,
  IProgress,
  IRef,
  IStudentParticipant,
  ITaskProgress,
} from 'src/app/shared/utils/interfaces'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { CommitContainerService } from 'src/app/shared/ui/commit-container/commit-container.service'
import { SetGradeService } from 'src/app/shared/ui/set-grade/set-grade.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-student-participant',
  templateUrl: './student-participant.component.html',
  styles: [
    `
      .title {
        font-size: 32px;
        text-align: center;
        margin-bottom: 40px;
      }
    `,
  ],
})
export class StudentParticipantComponent implements OnInit {
  progressList$ = new BehaviorSubject<IProgress[] | undefined>(undefined)
  studentId!: number
  studentName!: string
  courseId!: number
  courseName!: string

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private service: StudentParticipantService,
    private ui: DialogService,
    private dialog: MatDialog,
    private commitContainerService: CommitContainerService,
    private setGrade: SetGradeService
  ) {}

  editPath() {
    this.router.navigate(
      [
        'teacher',
        'course',
        this.courseId,
        'student',
        this.studentId,
        'edit-path',
      ],
      {
        queryParams: {
          studentName: this.studentName,
          courseName: this.courseName,
        },
      }
    )
  }

  editGrade(taskProgress: ITaskProgress) {
    this.setGrade
      .setGrade(
        `${this.studentName}: ${taskProgress.task.title}`,
        taskProgress.grade
      )
      .pipe(
        filterNullish(),
        mergeMap((grade) =>
          this.service.putTaskProgress(taskProgress._id, { grade })
        ),
        tap(() => this.ngOnInit()),
        catchError((err) => {
          this.ui.showToast('Note konnte nicht Bearbeitet werden')
          return err
        })
      )
      .subscribe()
  }

  addGrade(taskProgress: ITaskProgress) {
    this.setGrade
      .setGrade(`${this.studentName}: ${taskProgress.task.title}`)
      .pipe(
        filterNullish(),
        mergeMap((grade) =>
          this.service.putTaskProgress(taskProgress._id, { grade })
        ),
        tap(() => this.ngOnInit()),
        catchError((err) => {
          this.ui.showToast('Note konnte nicht Bearbeitet werden')
          return err
        })
      )
      .subscribe()
  }

  commitContainer(container: IRef) {
    this.commitContainerService
      .commitContainer(container._id, this.studentId, this.courseId)
      .pipe(tap(() => this.ngOnInit()))
      .subscribe()
  }

  navigateBack() {
    this.router.navigate(['teacher', 'courses', this.courseId], {
      queryParams: { name: this.courseName },
    })
  }

  ngOnInit(): void {
    this.initParams()
    this.updateProgress()
  }

  private initParams() {
    this.studentId = this.route.snapshot.params['studentId']
    this.courseId = this.route.snapshot.params['courseId']
    this.studentName = this.route.snapshot.queryParams['studentName']
    this.courseName = this.route.snapshot.queryParams['courseName']
  }

  private updateProgress() {
    this.service
      .getProgressList(this.studentId, this.courseId)
      .pipe(
        tap((list) => this.progressList$.next(list)),
        catchError((err) => {
          this.ui.showToast('Fortschritt konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
