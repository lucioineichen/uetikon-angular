import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeacherComponent } from './teacher.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TeacherComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, AddButtonModule],
})
export class TeacherDetailModule {}
