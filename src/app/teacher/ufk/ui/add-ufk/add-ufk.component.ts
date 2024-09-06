import { Component, OnInit } from '@angular/core'
import { AddUfkService } from './add-ufk.service'
import { IRef, IStudent } from 'src/app/shared/utils/interfaces'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SelectStudentService } from 'src/app/shared/ui/select-student/select-student.service'
import { tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { SelectUfkService } from 'src/app/shared/ui/select-ufk/select-ufk.service'
import { SelectSubjectService } from 'src/app/shared/ui/select-subject/select-subject.service'
import { SelectCourseService } from 'src/app/shared/ui/select-course/select-course.service'

@Component({
  selector: 'app-add-ufk',
  templateUrl: './add-ufk.component.html',
  styleUrls: ['./add-ufk.component.css'],
})
export class AddUfkComponent implements OnInit {
  ufkForm!: FormGroup
  file: File | null = null
  studentName?: string
  subjectName?: string
  subjectLongName?: string
  courseName?: string
  competenceName?: string

  constructor(
    protected service: AddUfkService,
    private fb: FormBuilder,
    private selectStudentService: SelectStudentService,
    private selectUfkService: SelectUfkService,
    private selectSubjectService: SelectSubjectService,
    private selectCourseService: SelectCourseService
  ) {}

  ngOnInit(): void {
    this.ufkForm = this.fb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(2),
        ],
      ],
      student: [null, Validators.required],
      grade: [null, Validators.required],
      competence: [null, Validators.required],
      subject: [null],
      comment: [null],
      course: [null],
    })
  }

  discardFile() {
    this.file = null
  }

  selectFile(file: File) {
    this.file = file
  }

  selectStudent() {
    this.selectStudentService
      .selectStudent(this.ufkForm.get('student')?.value)
      .pipe(
        filterNullish(),
        tap((ref) => {
          this.studentName = ref.name
          this.ufkForm.get('student')?.setValue(ref._id)
        })
      )
      .subscribe()
  }

  selectCompetence() {
    this.selectUfkService
      .selectUfk(this.ufkForm.get('competence')?.value)
      .pipe(
        filterNullish(),
        tap((ref) => {
          this.competenceName = ref.name
          this.ufkForm.get('competence')?.setValue(ref._id)
        })
      )
      .subscribe()
  }

  selectSubject() {
    this.selectSubjectService
      .selectSubject(this.ufkForm.get('subject')?.value)
      .pipe(
        filterNullish(),
        tap((ref) => {
          this.subjectName = ref.short
          this.subjectLongName = ref.name
          this.ufkForm.get('subject')?.setValue(ref._id)
        })
      )
      .subscribe()
  }

  selectCourse() {
    this.selectCourseService
      .selectCourse(this.ufkForm.get('student')?.value)
      .pipe(
        filterNullish(),
        tap((ref) => {
          this.courseName = ref.name
          this.ufkForm.get('course')?.setValue(ref._id)
        })
      )
      .subscribe()
  }
}
