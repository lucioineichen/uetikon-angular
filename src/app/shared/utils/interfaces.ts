import { Role } from '../../core/auth/auth.enum'
import { IName, IUser, Name, User } from '../../core/auth/user'
import { IRawSubject } from '../data/competences_data/competences-data.service'

export interface IStudentCourse {
  _id: number
  name: string
  credits: number
  grade?: number
  progress: number
}

export interface IStringRef {
  _id: string
  name: string
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
  subject?: { _id: string; name: string }
  isPublished: boolean
  status: number
  niveau: number
  isSelfAssessment: boolean
}

export interface ITask {
  _id: number
  title: string
  text?: string
  graded: boolean
  weight: number
  isSelfControl: boolean
  file?: IFile
  isSubmission: boolean
}

export interface ISubmission {
  _id: number
  name: string
  file: IFile
  forCorrection: ICorrection
  corrections: ICorrection[]
}

export interface ICorrection {
  _id: number
  name: string
  file?: IFile
  text?: string
  forSubmission: IRef[]
}

export interface IFile {
  name: string
  extension: string
  url: string
}

export interface ICompetence {
  _id: string
  name: string
  subTopic?: IStringRef
  topic: IStringRef
  subject: IRawSubject
}

export interface IMaterial {
  _id: number
  name: string
  text: string | undefined
}

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

export interface IStudentCourse extends ICourse {
  notMetContainerList: IRef[]
}

export interface ITaskProgress {
  _id: number
  task: ITask
  status: 0 | 1 | 2
  grade: number | undefined
  submissions: ISubmission[]
}

export interface IProgress {
  _id: number
  job: IStudyJob
  progress: number
  grade: number | undefined
  taskProgressList: ITaskProgress[]
}

export class Progress implements IProgress {
  constructor(
    public _id: number,
    public job: IStudyJob,
    public progress: number,
    public taskProgressList: ITaskProgress[],
    public grade: number | undefined
  ) {}

  get isGraded() {
    for (let taskProg of this.taskProgressList)
      if (taskProg.task.graded) return true
    return false
  }

  static Build(progress: IProgress) {
    return new Progress(
      progress._id,
      progress.job,
      progress.progress,
      progress.taskProgressList,
      progress.grade
    )
  }
}

export interface IJobSelection {
  _id: number
  name: string
  container: IContainer
  studentParticipant: IRef
  studyJob: IStudyJob
  deadline: string
  status: number
  dependentContainer?: IRef
  isLocked: boolean
  progress: IProgress | undefined
}

export interface IStudentParticipant {
  _id: number
  student: IRef
  course: IRef
  credits: number
  isActive: boolean
  progressList: IProgress[]
  // selectedContainerList: {
  //   container: IContainer
  //   jobProgressList?: IProgress[]
  // }[]
}

export interface IContainerPath {
  container: IContainer
  isMet: boolean
  selections: IJobSelection[]
  missingCompetences: ICompetence[]
}
