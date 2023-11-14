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

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css'],
})
export class TeacherCourseComponent implements OnInit {
  course$ = new BehaviorSubject<ICourse | undefined>(undefined)
  id: number
  errorMessage?: string
  newMessage: string = ''
  isChatOpen = false
  courseName: string

  currentUser$ = new BehaviorSubject(
    User.Build({
      _id: 0,
      email: '',
      name: { firstName: 'John', lastName: 'Doe' },
      role: Role.None,
    } as IStudent)
  )

  constructor(
    protected route: ActivatedRoute,
    private teacherService: TeacherService,
    private uiService: UiService,
    private router: Router,
    private dialog: MatDialog,
    private courseService: CourseService
  ) {
    this.id = this.route.snapshot.params['id']
    this.courseName = this.route.snapshot.queryParams['name']
  }

  ngOnInit(): void {}

  editStudents() {
    const course = this.course$.value
    if (!course) return
    this.teacherService
      .selectStudents([...course.students])
      .pipe(
        filter((students) => {
          return students !== null
        }),
        map((students) => students as IStudent[]),
        mergeMap((students) =>
          this.courseService.editStudents(course, students)
        ),
        map((students) => students.map(Student.Build)),
        tap((students) => {
          course.students = students
        }),
        catchError((err) => {
          this.uiService.showToast('Schüler konnten nicht verändert werden')
          return err
        })
      )
      .subscribe()
  }

  addStudyJobs() {
    this.dialog.open(ChooseStudyJobsDialogComponent)
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen
  }

  messages: IMessage[] = [
    {
      date: new Date(),
      message: 'Hello!',
      authorName: { firstName: 'John', lastName: 'Doe' },
      authorId: 0,
      edited: false,
    },
    {
      date: new Date(),
      message: 'Hi there!',
      authorName: { firstName: 'Jane', lastName: 'Smith' },
      authorId: 0,
      edited: true,
    },
    {
      date: new Date(),
      message: 'How are you?',
      authorName: { firstName: 'John', lastName: 'Doe' },
      authorId: 0,
      edited: false,
    },
  ]

  isCurrentUserMessage(message: IMessage): boolean {
    return message.authorId === 0
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const currentDate = new Date()
      const currentUser = this.currentUser$.value

      const newChatMessage: IMessage = {
        date: currentDate,
        message: this.newMessage,
        authorName: currentUser.name,
        authorId: currentUser._id,
        edited: false,
      }

      this.messages.push(newChatMessage)
      this.newMessage = ''
    }
  }

  refresh() {
    this.router.navigate(['teacher', 'courses', this.id], {
      queryParams: {
        name: this.courseName,
      },
    })
  }

  navigateToStudent(student: IStudent) {
    this.router.navigate(
      ['teacher', 'courses', this.course$.value?._id, 'student', student._id],
      {
        queryParams: {
          name: student.fullName,
          gagi: 'fein',
          courseName: this.course$.value?.name,
        },
      }
    )
  }
}
