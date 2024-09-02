import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, catchError, mergeMap, tap } from 'rxjs'
import { CourseService } from './course.service'
import { CreateMandetoryService } from './ui/create-mandetory/create-mandetory.service'
import { CreateChoiceService } from './ui/create-choice/create-choice.service'
import { CreateCompetenceContainerService } from './ui/create-competence-container/create-competence-container.service'
import { EditCourseService } from './ui/edit-course/edit-course.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import {
  IProgress,
  ITask,
  ITaskProgress,
  Progress,
} from 'src/app/shared/utils/interfaces'

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
  readonly currentProgress$ = new BehaviorSubject<Progress[] | undefined>(
    undefined
  )
  readonly currentTaskProgress$ = new BehaviorSubject<
    ITaskProgress[] | undefined
  >(undefined)
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
          this.updateCurrentProgress(params['id'])
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

  private updateCurrentProgress(id: number) {
    this.service
      .getCurrentProgress(id)
      .pipe(
        tap((progress) =>
          this.currentProgress$.next(progress.map(Progress.Build))
        ),
        tap((progress) =>
          this.currentTaskProgress$.next(progress[1].taskProgressList)
        ),
        catchError((err) => {
          this.ui.showToast('Aktuelle Leistungen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
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

  // readonly JOB_LIST_DUMMY_DATA: IProgress[] = [
  //   {
  //     _id: 1,
  //     job: {
  //       _id: 101,
  //       name: 'Mathematics 101',
  //       notes: 'Basic Mathematics course',
  //       tasks: [],
  //       competences: [
  //         { _id: 'comp1', name: 'Algebra' },
  //         { _id: 'comp2', name: 'Geometry' },
  //       ],
  //       credits: 3,
  //       subject: { _id: 'subj1', name: 'Mathematics' },
  //       isPublished: true,
  //       status: 1,
  //     },
  //     progress: 75,
  //     grade: 85,
  //     taskProgressList: [],
  //   },
  //   {
  //     _id: 2,
  //     job: {
  //       _id: 102,
  //       name: 'Physics 101',
  //       notes: 'Introductory Physics course',
  //       tasks: [],
  //       competences: [
  //         { _id: 'comp3', name: 'Mechanics' },
  //         { _id: 'comp4', name: 'Thermodynamics' },
  //       ],
  //       credits: 4,
  //       subject: { _id: 'subj2', name: 'Physics' },
  //       isPublished: false,
  //       status: 2,
  //     },
  //     progress: 50,
  //     grade: 78,
  //     taskProgressList: [],
  //   },
  //   {
  //     _id: 3,
  //     job: {
  //       _id: 103,
  //       name: 'Computer Science 101',
  //       notes: 'Introduction to Programming',
  //       tasks: [],
  //       competences: [
  //         { _id: 'comp5', name: 'Programming' },
  //         { _id: 'comp6', name: 'Data Structures' },
  //       ],
  //       credits: 5,
  //       subject: { _id: 'subj3', name: 'Computer Science' },
  //       isPublished: true,
  //       status: 3,
  //     },
  //     progress: 90,
  //     grade: 95,
  //     taskProgressList: [],
  //   },
  //   {
  //     _id: 4,
  //     job: {
  //       _id: 104,
  //       name: 'English Literature',
  //       notes: 'Study of classic literature',
  //       tasks: [],
  //       competences: [
  //         { _id: 'comp7', name: 'Literary Analysis' },
  //         { _id: 'comp8', name: 'Creative Writing' },
  //       ],
  //       credits: 2,
  //       subject: { _id: 'subj4', name: 'English' },
  //       isPublished: true,
  //       status: 1,
  //     },
  //     progress: 65,
  //     grade: 88,
  //     taskProgressList: [],
  //   },
  // ]

  // readonly JOB_LIST_DUMMY: Progress[] = this.JOB_LIST_DUMMY_DATA.map(
  //   Progress.Build
  // )
}
