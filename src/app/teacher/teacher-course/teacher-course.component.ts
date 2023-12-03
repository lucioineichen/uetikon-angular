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
  newMessage: string = ''
  isChatOpen = false

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
    private dialog: MatDialog,
    protected service: CourseService
  ) {
  }

  ngOnInit(): void {
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
}
