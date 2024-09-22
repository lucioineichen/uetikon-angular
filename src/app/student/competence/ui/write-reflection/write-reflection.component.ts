import { Component, Inject } from '@angular/core'
import { WriteReflectionService } from './write-reflection.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { tap } from 'rxjs'
import { SelectCourseService } from 'src/app/shared/ui/select-course/select-course.service'
import { SelectSubjectService } from 'src/app/shared/ui/select-subject/select-subject.service'
import { SelectUfkService } from 'src/app/shared/ui/select-ufk/select-ufk.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IUfk } from 'src/app/teacher/ufk/ufk.service'

@Component({
  selector: 'app-write-reflection',
  templateUrl: './write-reflection.component.html',
  styleUrls: ['./write-reflection.component.css'],
})
export class WriteReflectionComponent {
  ufkForm!: FormGroup
  file: File | null = null
  subjectName?: string
  subjectLongName?: string
  courseName?: string
  competenceName?: string

  constructor(
    protected service: WriteReflectionService,
    private fb: FormBuilder,
    private selectUfkService: SelectUfkService,
    private selectSubjectService: SelectSubjectService,
    private selectCourseService: SelectCourseService,
    @Inject(MAT_DIALOG_DATA) protected ufk?: IUfk
  ) {}

  ngOnInit(): void {
    this.ufkForm = this.fb.group({
      title: [
        { value: this.ufk?.title, disabled: this.ufk ? true : false },
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(2),
        ],
      ],
      grade: [null, Validators.required],
      competence: [
        { value: this.ufk?.competence._id, disabled: this.ufk ? true : false },
        Validators.required,
      ],
      subject: [
        { value: this.ufk?.subject?._id, disabled: this.ufk ? true : false },
      ],
      comment: [null],
      course: [
        { value: this.ufk?.course?._id, disabled: this.ufk ? true : false },
      ],
    })

    if (this.ufk) {
      this.competenceName = this.ufk.competence.name
      this.subjectName = this.ufk.subject?.name
      this.courseName = this.ufk.course?.name
    }
  }

  discardFile() {
    this.file = null
  }

  selectFile(file: File) {
    this.file = file
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
