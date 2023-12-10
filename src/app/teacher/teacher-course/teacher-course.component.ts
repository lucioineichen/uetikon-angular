import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  BehaviorSubject,
  ReplaySubject,
  catchError,
  filter,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { IMessage, IStudent, Student } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { UiService } from 'src/app/common/ui.service'
import { Role } from 'src/app/auth/auth.enum'
import { IUser, User } from 'src/app/user/user'
import { MatDialog } from '@angular/material/dialog'
import { ChooseStudyJobsDialogComponent } from '../choose-study-jobs-dialog/choose-study-jobs-dialog.component'
import { CourseService, ICourse } from './course.service'

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
export class TeacherCourseComponent implements OnInit {
  newMessage: string = ''
  isChatOpen = false
  breakpoint!: number
  STUDY_JOBS!: StudyJobDisplay[]

  private calcBreakpoint(width: number) {
    if (width > 1980) return 4
    if (width > 1350) return 3
    if (width > 1000) return 2
    return 1
  }

  onResize(event: any) {
    this.breakpoint = this.calcBreakpoint(event.target.innerWidth)
  }

  constructor(
    protected route: ActivatedRoute,
    private dialog: MatDialog,
    protected service: CourseService
  ) {}

  ngOnInit(): void {
    this.STUDY_JOBS = this.STUDY_JOBS_DATA.map((job) => {
      let dJob = this.STUDY_JOBS_DATA.find((djob) => djob._id === job.dependend)
      return StudyJobDisplay.Build(job, dJob)
    })

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

  addStudyJobs() {
    this.dialog.open(ChooseStudyJobsDialogComponent)
  }

  readonly STUDY_JOBS_DATA: IStudyJobTeacherDisplay[] = [
    {
      _id: 1,
      name: '1a Die Achsensymmetrie',
      credits: 3,
      tasksCount: 10,
      competencesCount: 5,
      subject: 'Mathematik',
      dependend: -1,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.geogebra.org%2Fmaterial%2Fn5anBr1uwEyVQNRiBtcSa7qL8buahdM7%2Fmaterial-Zzad3bUf-thumb.png&f=1&nofb=1&ipt=07b072d5069d33ca90d418237593ec8a0856808f6d4d432003fecb3eb0b77cb7&ipo=images',
    },
    {
      _id: 2,
      name: '1b Die Drehsymmetrie',
      credits: 4,
      tasksCount: 12,
      competencesCount: 6,
      subject: 'Mathematik',
      dependend: -1,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.welt.de%2Fimg%2Fwissenschaft%2Fmobile101578390%2F2482508397-ci102l-w1024%2Fknut4-BM-Berlin-Berlin-jpg.jpg&f=1&nofb=1&ipt=4394b45472f7e12d8070e483ab6849d7a8b1c68e21086fd30f9f9a726f47ba06&ipo=images',
    },
    {
      _id: 3,
      name: '1c Die Achsenspiegelung',
      credits: 3,
      tasksCount: 8,
      competencesCount: 4,
      subject: 'Mathematik',
      dependend: -1,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.planet-wissen.de%2Fnatur%2Ftierwelt%2Ftiere_im_wald%2Ftempxwaldtiereeichwetzgjpg100~_v-gseagaleriexl.jpg&f=1&nofb=1&ipt=04b11c7d6655fbec39659dc11e945e1fd3f9fb0393122ed340275dfd25b3809f&ipo=images',
    },
    {
      _id: 4,
      name: '1d Die Punktspiegelung',
      credits: 2,
      tasksCount: 6,
      competencesCount: 3,
      subject: 'Mathematik',
      dependend: 2,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bergwelten.com%2Ffiles%2Farticle%2Fimages%2Fmurmel.jpg&f=1&nofb=1&ipt=7de387e45525ec08c07567f24cdd17da727cb1371460400fa5c350efb3258741&ipo=images',
    },
    {
      _id: 5,
      name: '2a Potenzen/Regeln und Gesetze',
      credits: 5,
      tasksCount: 15,
      competencesCount: 8,
      subject: 'Mathematik',
      dependend: -1,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhintergrundbild.org%2Fwallpaper%2Ffull%2F9%2Fa%2Fd%2F35648-gorgerous-tiere-hintergrundbilder-2560x1600.jpg&f=1&nofb=1&ipt=a3d949e7bbfbeaa619848cd25699cce3123366fb8114fb5974aacbd92702f2e7&ipo=images',
    },
    {
      _id: 6,
      name: '2b Variablen',
      credits: 3,
      tasksCount: 10,
      competencesCount: 5,
      subject: 'Mathematik',
      dependend: 1,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F360%2F360888.jpg&f=1&nofb=1&ipt=8862e1516f04029138418049434a22cfdbc81036a47801a4fc89670f20818297&ipo=images',
    },
    {
      _id: 7,
      name: '2c Teiler, Vielfache und Primzahlen',
      credits: 4,
      tasksCount: 12,
      competencesCount: 6,
      subject: 'Mathematik',
      dependend: 6,
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhintergrundbild.org%2Fwallpaper%2Ffull%2Ff%2F1%2Fe%2F35702-tiere-hintergrundbilder-1920x1080-samsung.jpg&f=1&nofb=1&ipt=a0a68dc4279785bbdbaa8483a61e331b7d5497acfb8492775b92d51e5f7d3422&ipo=images',
    },
  ]
}
