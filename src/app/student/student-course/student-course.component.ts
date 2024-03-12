import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject, ReplaySubject, catchError, map, tap } from 'rxjs'
import { Role } from 'src/app/core/auth/auth.enum'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IFile, IMessage, IStudent, Student } from 'src/app/interfaces'
import { User } from 'src/app/core/auth/user'
import { StudentService } from '../student.service'
import { CourseService, ICourse } from './course.service'

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css'],
})
export class StudentCourseComponent implements OnInit {
  course$ = new ReplaySubject<ICourse>(1)
  id: number
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
    private router: Router,
    private service: CourseService,
    private uiService: DialogService
  ) {
    this.id = this.route.snapshot.params['id']
  }

  file: IFile = {
    extension: 'pdf',
    name: 'Essay_Studienstiftung_eUFi0uq.pdf',
    url: 'http://127.0.0.1:8000/download/Essay_Studienstiftung_eUFi0uq.pdf',
  }

  editPath() {}

  ngOnInit(): void {
    this.service
      .getCourse(this.id)
      .pipe(
        tap((course) => this.course$.next(course)),
        catchError((err) => {
          this.uiService.showToast('Kurs konnte nicht geladen werden')
          this.course$.error('server 500')
          return err
        })
      )
      .subscribe()
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
      authorId: -1,
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

  refresh() {
    this.router.navigate(['student', 'course', this.id])
  }

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

  competences: { name: string; completed: boolean; grade: number }[] = [
    { name: 'Fragen stellen und untersuchen', completed: true, grade: 0.75 },
    { name: 'Informationen erschließen', completed: true, grade: 0.88 },
    { name: 'Ordnen und strukturieren', completed: true, grade: 0.92 },
    { name: 'Modelle entwickeln', completed: true, grade: 0.81 },
    { name: 'Einschätzen und beurteilen', completed: true, grade: 0.79 },
    { name: 'Entwickeln und umsetzen', completed: true, grade: 0.86 },
    { name: 'Mitteilen und austauschen', completed: true, grade: 0.94 },
    { name: 'Naturperspektiven verstehen', completed: true, grade: 0.73 },
    {
      name: 'Gesellschaftsperspektiven erkennen',
      completed: true,
      grade: 0.68,
    },
    { name: 'Technikperspektiven analysieren', completed: true, grade: 0.77 },
    { name: 'Mensch und Gesundheit', completed: true, grade: 0.9 },
    { name: 'Lebensräume begreifen', completed: true, grade: 0.85 },
    { name: 'Wahrnehmung schärfen', completed: true, grade: 0.71 },
    { name: 'Kreativität entwickeln', completed: false, grade: 0 },
    { name: 'Interkulturelle Kommunikation', completed: false, grade: 0 },
    { name: 'Ethik und Werte reflektieren', completed: false, grade: 0 },
    { name: 'Teamarbeit fördern', completed: false, grade: 0 },
    { name: 'Umweltbewusstsein schärfen', completed: false, grade: 0 },
    { name: 'Umweltbewusstsein schärfen', completed: false, grade: 0 },
    { name: 'Selbstmanagement stärken', completed: false, grade: 0 },
    { name: 'Innovation vorantreiben', completed: false, grade: 0 },
    { name: 'Problem lösen', completed: false, grade: 0 },
    { name: 'Kritisches Denken fördern', completed: false, grade: 0 },
    { name: 'Digitale Kompetenz ausbauen', completed: false, grade: 0 },
    { name: 'Projekte planen und umsetzen', completed: false, grade: 0 },
    { name: 'Sprachliche Ausdrucksfähigkeit', completed: false, grade: 0 },
    { name: 'Globales Denken entwickeln', completed: false, grade: 0 },
    { name: 'Medienkompetenz erweitern', completed: false, grade: 0 },
    { name: 'Resilienz aufbauen', completed: false, grade: 0 },
    { name: 'Soziale Verantwortung leben', completed: false, grade: 0 },
    { name: 'Kulturelles Verständnis vertiefen', completed: false, grade: 0 },
    { name: 'Wissenschaftliches Arbeiten', completed: false, grade: 0 },
    { name: 'Finanzielle Bildung', completed: false, grade: 0 },
    { name: 'Entrepreneurship erkunden', completed: false, grade: 0 },
  ]
}
