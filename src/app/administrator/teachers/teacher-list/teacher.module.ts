import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeachersComponent } from './teachers.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { TeacherFormComponent } from './teacher-form/teacher-form.component'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [TeachersComponent, TeacherFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AddButtonModule,
    ToolbarModule,
  ],
})
export class TeacherModule {}
