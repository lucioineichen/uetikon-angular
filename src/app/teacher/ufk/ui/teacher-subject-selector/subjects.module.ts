import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeacherSubjectSelectorComponent } from './subjects.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TeacherSubjectSelectorComponent],
  exports: [TeacherSubjectSelectorComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class TeacherSubjectSelectorModule {}
