import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeacherStudentSelectorComponent } from './students.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TeacherStudentSelectorComponent],
  exports: [TeacherStudentSelectorComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class TeacherStudentSelectorModule {}
