import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentControlComponent } from './student-control.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectStudentModule } from '../select-student/select-student.module'

@NgModule({
  declarations: [StudentControlComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectStudentModule,
  ],
  exports: [StudentControlComponent],
})
export class StudentControlModule {}
