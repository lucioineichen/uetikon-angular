import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UiService } from 'src/app/common/ui.service'
import { SubSink } from 'subsink'
import { TeacherService } from '../../teacher.service'

@Component({
  selector: 'app-teacher-course-creator-dialog',
  templateUrl: './teacher-course-creator-dialog.component.html',
  styles: [],
})
export class TeacherCourseCreatorDialogComponent {
  createCourse!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private uiService: UiService,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    console.warn('This component is only for demo purposes.')
    this.buildcreateUserForm()
  }

  buildcreateUserForm() {
    this.createCourse = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      credits: [undefined, [Validators.required]],
    })
  }

  addStudents() {
    this.teacherService.addStudents()
  }
}
