import { Role } from '../../core/auth/auth.enum'
import { IName, IUser, Name, User } from '../../core/auth/user'

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

export interface IContainer {
  _id: number
  name: string
  type: 'mandetory' | 'choice' | 'competence'
  isDependent: boolean
  dependentContainer: IRef
  mandetoryJob: IStudyJob
  jobChoices: IStudyJob[]
  necessairyCompetences: ICompetence[]
}

export interface IStudyJob {
  _id: number
  name: string
  notes?: string
  tasks: ITask[]
  competences: ICompetence[]
  credits: number
  subject: { _id: string; name: string }
  isPublished: boolean
  status: number
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
  _id: string
  name: string
}

// export interface JobContainer {
//   _id: number
//   name: string | undefined
//   isDependent: boolean
//   dependentContainer: IRef | undefined
//   type: 'mandetory' | 'choice' | 'competence'
//   necessairyCompetences: ICompetence[] | undefined
//   mandetoryJob: IStudyJob | undefined
//   jobChoices: IStudyJob[]
// }

export interface ICourse {
  _id: number
  name: string
  credits: number
  studentList: IRef[]
  teacherList: IRef[]
  chat: IChat
  isProject: boolean
  imageUrl: string
  containerList: IContainer[]
}

export interface ITaskProgress {
  _id: number
  task: ITask
  completed: boolean
  grade: number
}

export interface IProgress {
  _id: number
  job: IStudyJob
  progress: number
  grade: number
  taskProgressList: ITaskProgress[]
}

export interface IStudentParticipant {
  _id: number
  student: IRef
  course: IRef
  credits: number
  isActive: boolean
  selectedContainerList: { container: IRef; jobProgressList: IProgress[] }[]
}
