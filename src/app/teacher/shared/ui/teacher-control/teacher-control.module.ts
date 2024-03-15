import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { TeacherControlComponent } from './teacher-control.component'

@NgModule({
  declarations: [TeacherControlComponent],
  exports: [TeacherControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class TeacherControlModule {}
