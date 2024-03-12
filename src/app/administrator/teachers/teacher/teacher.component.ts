import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TeacherService } from './teacher.service'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IPermission } from 'src/app/core/auth/auth.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  id: number
  name: string
  teacher$ = this.service.teacher$
  displayedColumns: string[] = ['name', 'read', 'write']
  displayedColumnsProperties: string[] = ['property', 'value']
  isEditing = false
  userForm!: FormGroup
  permissionsCopy?: IPermission[]

  constructor(
    private service: TeacherService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
  }

  ngOnInit(): void {
    this.service.updateTeacher(this.id)
    this.userForm = this.formBuilder.group({
      email: ['lehrer@email.com', [Validators.required, Validators.email]],
      firstName: [
        'lehrer',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      middleName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      lastName: [
        'lehrer',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
    })
  }

  navigateBack() {
    this.location.back()
  }

  deleteTeacher() {}

  startEdit() {
    if (!this.teacher$.value) return

    this.permissionsCopy = []
    for (let permission of this.teacher$.value.permissions) {
      this.permissionsCopy.push({ ...permission })
    }
    this.isEditing = true
  }

  stopEdit() {
    if (!this.teacher$.value?.permissions || !this.permissionsCopy) return

    this.teacher$.value.permissions = this.permissionsCopy
    this.isEditing = false
  }

  saveUser() {
    if (!this.teacher$.value?.permissions) return
    this.service.editTeacherUser(
      this.userForm.value,
      this.teacher$.value.permissions
    )
    this.isEditing = false
  }
}
