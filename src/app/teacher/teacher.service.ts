import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'
import { ICourse, IStudent } from '../interfaces'
import { environment } from '../environment/environment.demo'
import { UiService } from '../common/ui.service'
import { MatDialog } from '@angular/material/dialog'
import { AddStudentsDialogComponent } from './add-students-dialog/add-students-dialog.component'
import { Role } from '../auth/auth.enum'

export interface ITeacherService {
  readonly courses$: ReplaySubject<ICourse[]>
  updateCourses(): void
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService implements ITeacherService {
  readonly courses$ = new ReplaySubject<ICourse[]>(1)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${environment.baseUrl}/user/courses`)
  }

  updateCourses() {
    this.getCourses().subscribe({
      next: (courses) => this.courses$.next(courses),
      error: (e: Error) => {
        this.uiService.showToast('Kurse konnten nicht geladen werden')
        this.courses$.error(new Error('server 500'))
      },
    })
  }

  addStudents() {
    const dialogRef = this.dialog.open(AddStudentsDialogComponent)

    return dialogRef.afterClosed() as Observable<IStudent[]>
  }

  getStudents(): IStudent[] {
    return dummyStudents
  }
}

export const dummyStudents: IStudent[] = [
  {
    _id: '1',
    email: 'johndoe@example.com',
    name: { firstName: 'John', middleName: 'A.', lastName: 'Doe' },
    role: Role.Student,
    picture: 'path-to-picture1.jpg',
  },
  {
    _id: '2',
    email: 'janesmith@example.com',
    name: { firstName: 'Jane', lastName: 'Smith' },
    role: Role.Student,
    picture: 'path-to-picture2.jpg',
  },
  {
    _id: '3',
    email: 'michaeljohnson@example.com',
    name: { firstName: 'Michael', middleName: 'B.', lastName: 'Johnson' },
    role: Role.Student,
    picture: 'path-to-picture3.jpg',
  },
  // Add 20 more students
  {
    _id: '4',
    email: 'emmawilliams@example.com',
    name: { firstName: 'Emma', lastName: 'Williams' },
    role: Role.Student,
    picture: 'path-to-picture4.jpg',
  },
  {
    _id: '5',
    email: 'davidbrown@example.com',
    name: { firstName: 'David', middleName: 'C.', lastName: 'Brown' },
    role: Role.Student,
    picture: 'path-to-picture5.jpg',
  },
  {
    _id: '6',
    email: 'oliviajones@example.com',
    name: { firstName: 'Olivia', lastName: 'Jones' },
    role: Role.Student,
    picture: 'path-to-picture6.jpg',
  },
  {
    _id: '7',
    email: 'jamestaylor@example.com',
    name: { firstName: 'James', middleName: 'D.', lastName: 'Taylor' },
    role: Role.Student,
    picture: 'path-to-picture7.jpg',
  },
  {
    _id: '8',
    email: 'sophiawilson@example.com',
    name: { firstName: 'Sophia', lastName: 'Wilson' },
    role: Role.Student,
    picture: 'path-to-picture8.jpg',
  },
  {
    _id: '9',
    email: 'danielanderson@example.com',
    name: { firstName: 'Daniel', middleName: 'E.', lastName: 'Anderson' },
    role: Role.Student,
    picture: 'path-to-picture9.jpg',
  },
  {
    _id: '10',
    email: 'isabellathomas@example.com',
    name: { firstName: 'Isabella', lastName: 'Thomas' },
    role: Role.Student,
    picture: 'path-to-picture10.jpg',
  },
  {
    _id: '11',
    email: 'ethanmartin@example.com',
    name: { firstName: 'Ethan', middleName: 'F.', lastName: 'Martin' },
    role: Role.Student,
    picture: 'path-to-picture11.jpg',
  },
  {
    _id: '12',
    email: 'miaclark@example.com',
    name: { firstName: 'Mia', lastName: 'Clark' },
    role: Role.Student,
    picture: 'path-to-picture12.jpg',
  },
  {
    _id: '13',
    email: 'alexanderlewis@example.com',
    name: { firstName: 'Alexander', middleName: 'G.', lastName: 'Lewis' },
    role: Role.Student,
    picture: 'path-to-picture13.jpg',
  },
  {
    _id: '14',
    email: 'avahall@example.com',
    name: { firstName: 'Ava', lastName: 'Hall' },
    role: Role.Student,
    picture: 'path-to-picture14.jpg',
  },
  {
    _id: '15',
    email: 'williamyoung@example.com',
    name: { firstName: 'William', middleName: 'H.', lastName: 'Young' },
    role: Role.Student,
    picture: 'path-to-picture15.jpg',
  },
  {
    _id: '16',
    email: 'sofialee@example.com',
    name: { firstName: 'Sofia', lastName: 'Lee' },
    role: Role.Student,
    picture: 'path-to-picture16.jpg',
  },
  {
    _id: '17',
    email: 'benjaminwhite@example.com',
    name: { firstName: 'Benjamin', middleName: 'I.', lastName: 'White' },
    role: Role.Student,
    picture: 'path-to-picture17.jpg',
  },
  {
    _id: '18',
    email: 'charlottewalker@example.com',
    name: { firstName: 'Charlotte', lastName: 'Walker' },
    role: Role.Student,
    picture: 'path-to-picture18.jpg',
  },
  {
    _id: '19',
    email: 'lucasharris@example.com',
    name: { firstName: 'Lucas', middleName: 'J.', lastName: 'Harris' },
    role: Role.Student,
    picture: 'path-to-picture19.jpg',
  },
  {
    _id: '20',
    email: 'lilyking@example.com',
    name: { firstName: 'Lily', lastName: 'King' },
    role: Role.Student,
    picture: 'path-to-picture20.jpg',
  },
]
