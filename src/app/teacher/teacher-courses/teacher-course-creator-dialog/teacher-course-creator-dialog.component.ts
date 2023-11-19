import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TeacherService } from '../../teacher.service'
import { IStudent } from 'src/app/interfaces'
import { ICreateCourseData } from '../teacher-courses.component'
import { BehaviorSubject, filter, tap } from 'rxjs'
import { filterNullish } from 'src/app/common/common'
import { SelectStudentsService } from 'src/app/common/select-students/select-students.service'

@Component({
  selector: 'app-teacher-course-creator-dialog',
  templateUrl: './teacher-course-creator-dialog.component.html',
  styles: [],
})
export class TeacherCourseCreatorDialogComponent {
  createCourseForm!: FormGroup
  selectedStudents$ = new BehaviorSubject<IStudent[]>([])

  constructor(
    private formBuilder: FormBuilder,
    private selectStudents: SelectStudentsService
  ) {}

  ngOnInit() {
    this.buildcreateUserForm()
  }

  buildcreateUserForm() {
    this.createCourseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      credits: [undefined, [Validators.required]],
      isProject: [false, [Validators.required]],
    })
  }

  addStudents() {
    this.selectStudents
      .selectStudents(this.selectedStudents$.value.map((stud) => stud._id))
      .pipe(
        filterNullish(),
        tap((selected) => this.selectedStudents$.next(selected))
      )
      .subscribe()
  }

  get createCourseData() {
    return {
      name: this.createCourseForm.value.name,
      credits: this.createCourseForm.value.credits,
      isProject: this.createCourseForm.value.isProject,
      students: this.selectedStudents$.value.map((stud) => stud._id),
    }
  }
}
