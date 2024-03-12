import { Component } from '@angular/core'
import { IMessage, IStudent } from '../../utils/interfaces'
import { BehaviorSubject } from 'rxjs'
import { Role } from '../../../core/auth/auth.enum'
import { User } from '../../../core/auth/user'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  newMessage = ''
  isChatOpen = false

  currentUser$ = new BehaviorSubject(
    User.Build({
      _id: 0,
      email: '',
      name: { firstName: 'John', lastName: 'Doe' },
      role: Role.None,
    } as IStudent)
  )

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
