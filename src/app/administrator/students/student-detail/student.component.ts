import { Component } from '@angular/core'
import { Location } from '@angular/common'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { StudentService } from './student.service'
import { ActivatedRoute } from '@angular/router'
import { tap } from 'rxjs'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  id: number
  name: string
  student$ = this.service.student$
  isEditing = false
  studentForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    middleName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    lastName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    grade: ['', [Validators.required]],
    classes: [[]],
  })

  constructor(
    private service: StudentService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
  }

  ngOnInit(): void {
    this.service.updateStudent(this.id)
  }

  createTempPassword() {
    console.log('asdfa')
    this.service
      .createTempPassword()
      ?.pipe(tap(() => this.service.updateStudent(this.id)))
      .subscribe()
  }

  get classesControl() {
    return this.studentForm.get('classes') as FormControl
  }

  navigateBack() {
    this.location.back()
  }

  deleteStudent() {
    this.service.deleteStudent()
  }

  startEdit() {
    const student = this.student$.value
    if (!student) return
    if (student)
      this.studentForm.setValue({
        email: student.email,
        firstName: student.name.firstName,
        middleName: student.name.middleName,
        lastName: student.name.lastName,
        grade: student.grade,
        classes: student.classes.map((c) => c._id),
      })
    this.isEditing = true
  }

  stopEdit() {
    this.isEditing = false
  }

  saveUser() {
    if (!this.studentForm) return
    this.service.saveStudent(this.studentForm.value)
    this.isEditing = false
  }
}
