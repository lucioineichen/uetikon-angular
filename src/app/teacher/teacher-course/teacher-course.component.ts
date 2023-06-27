import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, ReplaySubject, tap } from 'rxjs'
import { ICourse, IMessage, IStudent } from 'src/app/interfaces'
import { TeacherService } from '../teacher.service'
import { UiService } from 'src/app/common/ui.service'
import { Role } from 'src/app/auth/auth.enum'
import { IUser, User } from 'src/app/user/user'
import { MatDialog } from '@angular/material/dialog'
import { ChooseStudyJobsDialogComponent } from '../choose-study-jobs-dialog/choose-study-jobs-dialog.component'

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css'],
})
export class TeacherCourseComponent implements OnInit {
  course$ = new ReplaySubject<ICourse>(1)
  id: number
  errorMessage?: string
  newMessage: string = ''
  isChatOpen = false
  courseName: string

  currentUser$ = new BehaviorSubject(
    User.Build({
      _id: 'user1',
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
    private dialog: MatDialog
  ) {
    this.id = this.route.snapshot.params['id']
    this.courseName = this.route.snapshot.queryParams['name']
  }

  ngOnInit(): void {
    this.teacherService.getCourse(this.id).subscribe({
      next: (course) => {
        this.course$.next(course)
        console.log(course)
      },
      error: (err) => {
        this.uiService.showToast('Kurs konnte nicht geladen werden')
        this.errorMessage = 'Kurs konnte nicht geladen werden'
      },
    })
  }

  addStudyJobs() {
    this.dialog.open(ChooseStudyJobsDialogComponent)
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen
  }

  addModule() {}

  messages: IMessage[] = [
    {
      date: new Date(),
      message: 'Hello!',
      authorName: { firstName: 'John', lastName: 'Doe' },
      authorId: 'user1',
      edited: false,
    },
    {
      date: new Date(),
      message: 'Hi there!',
      authorName: { firstName: 'Jane', lastName: 'Smith' },
      authorId: 'user2',
      edited: true,
    },
    {
      date: new Date(),
      message: 'How are you?',
      authorName: { firstName: 'John', lastName: 'Doe' },
      authorId: 'user1',
      edited: false,
    },
  ]

  isCurrentUserMessage(message: IMessage): boolean {
    return message.authorId === 'user1'
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
}
