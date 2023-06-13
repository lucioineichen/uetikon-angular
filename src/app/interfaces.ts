import { Role } from './auth/auth.enum'
import { IName, IUser, User } from './user/user'

export interface IStudentCourse {
  _id: number
  name: string
  credits: number
  grade?: number
  progress: number
}

export interface ICourse {
  _id: number
  name: string
  credits: number
  teachers: ITeacher[]
  students: IStudent[]
  chat: IChat
}

export interface IChat {
  messages: IMessage[]
}

export interface IMessage {
  date: Date
  message: string
  authorName: IName
  authorId: string
  edited: boolean
}

export interface IStudent extends IUser {
  grade: number
}

export class Student extends User implements IStudent {
  constructor(
    _id = '--',
    email = '--',
    name: IName = { firstName: '', lastName: '' } as IName,
    picture?: string,
    public grade: number = 1
  ) {
    super(_id, email, name, Role.Student, picture)
    this.grade = grade
  }

  static override Build(student: IStudent) {
    if (!student) {
      return new Student()
    }

    return new Student(
      student._id,
      student.email,
      student.name,
      student.picture,
      student.grade
    )
  }
}

export interface ITeacher extends IUser {}

export class Teacher extends User {
  constructor(
    _id = '--',
    email = '--',
    name: IName = { firstName: '--', lastName: '--' } as IName,
    picture?: string
  ) {
    super(_id, email, name, Role.Teacher, picture)
  }

  static override Build(teacher: ITeacher) {
    if (!teacher) {
      return new Teacher()
    }

    return new Teacher(
      teacher._id,
      teacher.email,
      teacher.name,
      teacher.picture
    )
  }
}

export interface IModule {
  _id: number
  name: string
}

export interface ITask {
  title: string
  text?: string
  file?: string
}
