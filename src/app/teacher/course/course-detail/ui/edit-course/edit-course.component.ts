import { Component, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BehaviorSubject, tap } from 'rxjs'
import { ChooseTeacherDialogService } from 'src/app/shared/ui/choose-teacher-dialog/choose-teacher-dialog.service'
import { SelectStudentsService } from 'src/app/shared/ui/select-students/select-students.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ICourse, IRef } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent {
  data = inject(MAT_DIALOG_DATA)
  editCourseForm!: FormGroup
  studentList$ = new BehaviorSubject<IRef[]>([])
  teacherList$ = new BehaviorSubject<IRef[]>([])
  constructor(
    private formBuilder: FormBuilder,
    private selectStudents: SelectStudentsService,
    private chooseTeacherList: ChooseTeacherDialogService
  ) {}

  ngOnInit() {
    this.buildForm()
    this.fillForm()
  }

  fillForm() {
    const form = this.editCourseForm
    const course: ICourse = this.data
    form.setValue({
      name: course.name,
      credits: course.credits,
      isProject: course.isProject,
      imageUrl: course.imageUrl,
    })
    this.studentList$.next(course.studentList)
    this.teacherList$.next(course.teacherList)
  }

  buildForm() {
    this.editCourseForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      credits: [undefined, [Validators.required]],
      isProject: [false, [Validators.required]],
      imageUrl: [''],
    })
  }

  editStudentList() {
    this.selectStudents
      .selectStudents(this.studentList$.getValue().map((ref) => ref._id))
      .pipe(
        filterNullish(),
        tap((selected) =>
          this.studentList$.next(
            selected.map((student) => {
              return { _id: student._id, name: student.fullName }
            })
          )
        )
      )
      .subscribe()
  }

  editTeacherList() {
    this.chooseTeacherList
      .chooseTeacherList(this.teacherList$.getValue())
      .pipe(
        filterNullish(),
        tap((selected) => this.teacherList$.next(selected))
      )
      .subscribe()
  }

  get createCourseData() {
    return {
      name: this.editCourseForm.value.name,
      credits: this.editCourseForm.value.credits,
      isProject: this.editCourseForm.value.isProject,
      imageUrl: this.editCourseForm.value.imageUrl,
      studentList: this.studentList$.value.map((ref) => ref._id),
      teacherList: this.teacherList$.value.map((ref) => ref._id),
    }
  }
}
