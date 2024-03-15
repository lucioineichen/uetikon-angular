import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddUfkComponent } from './add-ufk.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { TeacherStudentSelectorModule } from '../teacher-student-selector/students.module'
import { TeacherSubjectSelectorModule } from '../teacher-subject-selector/subjects.module'

@NgModule({
  declarations: [AddUfkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TeacherStudentSelectorModule,
    TeacherSubjectSelectorModule,
  ],
})
export class AddUfkModule {}
