import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { catchError, mergeMap, tap } from 'rxjs'
import { CourseService } from './course.service'
import { CreateMandetoryService } from './ui/create-mandetory/create-mandetory.service'
import { CreateChoiceService } from './ui/create-choice/create-choice.service'
import { CreateCompetenceContainerService } from './ui/create-competence-container/create-competence-container.service'
import { EditCourseService } from './ui/edit-course/edit-course.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

interface IStudyJobTeacherDisplay {
  _id: number
  name: string
  credits: number
  tasksCount: number
  competencesCount: number
  subject: string
  dependend: number
  imageUrl: string
}

class StudyJobDisplay {
  constructor(
    public _id: number,
    public name: string,
    public credits: number,
    public tasksCount: number,
    public competencesCount: number,
    public subject: string,
    public imageUrl: string,
    public dependend?: { _id: number; name: string }
  ) {}

  static Build(
    job: IStudyJobTeacherDisplay,
    dependedJob?: IStudyJobTeacherDisplay
  ) {
    return new StudyJobDisplay(
      job._id,
      job.name,
      job.credits,
      job.tasksCount,
      job.competencesCount,
      job.subject,
      job.imageUrl,
      dependedJob ? { _id: dependedJob._id, name: dependedJob.name } : undefined
    )
  }
}

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css'],
})
export class CourseDetailComponent implements OnInit {
  readonly id$ = this.service.id$
  readonly name$ = this.service.name$
  readonly course$ = this.service.course$
  newMessage: string = ''
  isChatOpen = false
  breakpoint!: number
  // STUDY_JOBS!: StudyJobDisplay[]
  mainMargin = '150px'

  private calcBreakpoint(width: number) {
    if (width > 1600) return 3
    if (width > 1170) return 2
    return 1
  }

  private calcMargin(width: number) {
    if (width > 1600) return width / 10
    if (width > 1170) return width / 6
    return width / 10
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
    this.mainMargin = `${this.calcMargin(event.target.innerWidth)}px`
  }

  constructor(
    protected route: ActivatedRoute,
    protected service: CourseService,
    private router: Router,
    private mandetory: CreateMandetoryService,
    private createChoice: CreateChoiceService,
    private createComp: CreateCompetenceContainerService,
    private editCourseService: EditCourseService,
    private ui: DialogService
  ) {}

  routeToParticipant(
    courseId: number,
    courseName: string,
    studentId: number,
    studentName: string
  ) {
    this.router.navigate(
      ['teacher', 'courses', courseId, 'student-participant', studentId],
      { queryParams: { courseName: courseName, name: studentName } }
    )
  }

  editCourseInfo() {
    const course = this.course$.value
    if (!course) return
    this.editCourseService
      .editCourseInfo(course)
      .pipe(
        filterNullish(),
        mergeMap((courseInfo) =>
          this.service.putCourse(course._id, courseInfo)
        ),
        tap(() => this.service.update()),
        catchError((error) => {
          this.ui.showToast('Kurse konnte nicht bearbeitet werden')
          return error
        })
      )
      .subscribe()
  }

  openContainer(containerId: number, containerName: string) {
    const courseId = this.id$.getValue()
    const courseName = this.name$.getValue()
    if (!courseId || !courseName) return
    this.router.navigate(
      ['teacher', 'courses', courseId, 'containers', containerId],
      {
        queryParams: {
          courseName,
          containerName,
        },
      }
    )
  }

  goBack() {
    this.router.navigate(['teacher', 'courses'])
  }

  ngOnInit(): void {
    this.mainMargin = `${this.calcMargin(window.innerWidth)}px`

    this.breakpoint = this.calcBreakpoint(window.innerWidth)

    this.route.params
      .pipe(
        tap((params) => {
          this.service.id$.next(params['id'])
        })
      )
      .subscribe()

    this.route.queryParams
      .pipe(
        tap((params) => {
          this.service.name$.next(params['name'])
        })
      )
      .subscribe()

    this.service.update()
  }

  addMandetoryJob() {
    const id = this.id$.getValue()
    if (!id) return
    this.mandetory
      .createMandetory(id)
      .pipe(tap(() => this.service.update()))
      .subscribe()
  }

  addCompetenceJob() {
    const id = this.id$.getValue()
    if (!id) return
    this.createComp
      .createCompetence(id)
      .pipe(tap(() => this.service.update()))
      .subscribe()
  }

  addJobChoice() {
    const id = this.id$.getValue()
    if (!id) return
    this.createChoice
      .createChoice(id)
      .pipe(tap(() => this.service.update()))
      .subscribe()
  }
}
