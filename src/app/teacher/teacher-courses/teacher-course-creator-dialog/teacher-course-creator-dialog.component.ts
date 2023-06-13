import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TeacherService } from '../../teacher.service'
import { IStudent } from 'src/app/interfaces'
import { ICreateCourseData } from '../teacher-courses.component'

@Component({
  selector: 'app-teacher-course-creator-dialog',
  templateUrl: './teacher-course-creator-dialog.component.html',
  styles: [],
})
export class TeacherCourseCreatorDialogComponent {
  createCourseForm!: FormGroup
  selectedStudents: IStudent[] = []

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    this.buildcreateUserForm()
  }

  buildcreateUserForm() {
    this.createCourseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      credits: [undefined, [Validators.required]],
    })
  }

  addStudents() {
    console.log('addStudents to: ', this.selectedStudents)
    this.teacherService
      .selectStudents([...this.selectedStudents])
      .subscribe((selectedStudents) => {
        if (selectedStudents) this.selectedStudents = [...selectedStudents]
        console.log('new selectedStudents: ', this.selectedStudents)
      })
  }

  selectedStudentsList() {
    if (this.selectedStudents.length === 0) return
    let list = ''
    this.selectedStudents.forEach(
      (student, index) => (list += index !== 0 ? ', ' : '' + student.fullName)
    )
    return list
  }

  get createCourseData(): ICreateCourseData {
    const students: IStudent[] = []
    this.selectedStudents.forEach((student) => students.push({ ...student }))
    console.log('selectedStudents in crouseCreatorForm: ', students)
    return {
      name: this.createCourseForm.value.name,
      credits: this.createCourseForm.value.credits,
      students: students,
    }
  }
}
