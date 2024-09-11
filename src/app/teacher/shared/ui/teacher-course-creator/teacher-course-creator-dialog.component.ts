import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IStudent } from 'src/app/shared/utils/interfaces'
import { ICreateCourseData } from '../../../course/course-list/teacher-courses.component'
import { BehaviorSubject, filter, tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { SelectStudentsService } from 'src/app/shared/ui/select-students/select-students.service'

@Component({
  selector: 'app-teacher-course-creator-dialog',
  templateUrl: './teacher-course-creator-dialog.component.html',
  styles: [],
})
export class TeacherCourseCreatorComponent {
  form!: FormGroup
  studentNames: string[] = []

  constructor(
    private formBuilder: FormBuilder,
    private selectStudents: SelectStudentsService
  ) {}

  ngOnInit() {
    this.buildcreateUserForm()
  }

  buildcreateUserForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      credits: [undefined, [Validators.required]],
      isProject: [false, [Validators.required]],
      studentIdList: [[], []]
    })
  }

  addStudents() {
    this.selectStudents
      .selectStudents(this.form.get('studentIdList')?.value)
      .pipe(
        filterNullish(),
        tap((selected) => this.studentNames = selected.map((stud) => stud.fullName)),
        tap((selected) => this.form.get('studentIdList')?.setValue(selected.map((stud) => stud._id)))

      )
      .subscribe()
  }
}
