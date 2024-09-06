import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectStudentComponent } from './select-student.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SelectStudentComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectStudentModule {}
