import { Role } from './core/auth/auth.enum'
import { IName, IUser, Name, User } from './core/auth/user'

export interface IStudentCourse {
  _id: number
  name: string
  credits: number
  grade?: number
  progress: number
}

export interface IRef {
  _id: number
  name: string
}

export interface IFolder {
  _id: number
  name: string
  folders: IRef[]
  studyJobs: IStudyJob[]
  path: IRef[]
}

export interface IChat {
  messages: IMessage[]
}

export interface IMessage {
  date: Date
  message: string
  authorName: IName
  authorId: number
  edited: boolean
}

export interface IStudent extends IUser {
  grade: number
}

export class Student extends User implements IStudent {
  constructor(
    _id = 0,
    email = '--',
    name: IName = Name.Build({ firstName: '', lastName: '' } as IName),
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

export class Teacher extends User implements ITeacher {
  constructor(
    _id = 0,
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

export interface IStudyJob {
  _id: number
  name: string
  notes?: string
  tasks: ITask[]
  competences: ICompetence[]
  subject: string
}

export interface ITask {
  title: string
  text?: string
  graded: boolean
  weight: number
  file?: IFile
}

export interface IFile {
  name: string
  extension: string
  url: string
}

export interface ICompetence {
  _id: number
  name: string
  subject: string
}

export interface IStudentParticipant {}
