import { Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { User } from 'src/app/user/user'
import { Role } from 'src/app/auth/auth.enum'
import { IMessage, IStudent } from 'src/app/interfaces'
import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from 'src/app/common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { ProjectService } from './project.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  // project$: BehaviorSubject<IProject | undefined>
  // id: number
  // isChatOpen = false
  // name: string
  // newMessage: string = ''
  // readonly currentUser$ = new BehaviorSubject(
  //   User.Build({
  //     _id: 0,
  //     email: '',
  //     name: { firstName: 'John', lastName: 'Doe' },
  //     role: Role.None,
  //   } as IStudent)
  // )
  // constructor(
  //   protected route: ActivatedRoute,
  //   private uiService: UiService,
  //   private router: Router,
  //   private dialog: MatDialog,
  //   private service: ProjectService
  // ) {
  //   this.id = this.route.snapshot.params['id']
  //   this.name = this.route.snapshot.queryParams['name']
  //   this.project$ = this.service.project$
  // }
  // ngOnInit(): void {
  //   this.service.updateProject(this.id)
  // }
  // toggleChat(): void {
  //   this.isChatOpen = !this.isChatOpen
  // }
  // messages: IMessage[] = [
  //   {
  //     date: new Date(),
  //     message: 'Hello!',
  //     authorName: { firstName: 'John', lastName: 'Doe' },
  //     authorId: 0,
  //     edited: false,
  //   },
  //   {
  //     date: new Date(),
  //     message: 'Hi there!',
  //     authorName: { firstName: 'Jane', lastName: 'Smith' },
  //     authorId: 0,
  //     edited: true,
  //   },
  //   {
  //     date: new Date(),
  //     message: 'How are you?',
  //     authorName: { firstName: 'John', lastName: 'Doe' },
  //     authorId: 0,
  //     edited: false,
  //   },
  // ]
  // isCurrentUserMessage(message: IMessage): boolean {
  //   return message.authorId === 0
  // }
  // sendMessage(): void {
  //   if (this.newMessage.trim()) {
  //     const currentDate = new Date()
  //     const currentUser = this.currentUser$.value
  //     const newChatMessage: IMessage = {
  //       date: currentDate,
  //       message: this.newMessage,
  //       authorName: currentUser.name,
  //       authorId: currentUser._id,
  //       edited: false,
  //     }
  //     this.messages.push(newChatMessage)
  //     this.newMessage = ''
  //   }
  // }
  // refresh() {
  //   this.router.navigate(['teacher', 'projects', this.id], {
  //     queryParams: {
  //       name: this.name,
  //     },
  //   })
  // }
  // editDates() {
  //   throw Error('not implemented')
  // }
  // navigateToStudent(student: IStudent) {
  //   this.router.navigate(
  //     ['teacher', 'projects', this.project$.value?._id, 'student', student._id],
  //     {
  //       queryParams: {
  //         name: student.fullName,
  //         projectName: this.project$.value?.name,
  //       },
  //     }
  //   )
  // }
}
