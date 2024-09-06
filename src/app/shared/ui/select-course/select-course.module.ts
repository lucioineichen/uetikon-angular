import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectCourseComponent } from './select-course.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SelectCourseComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectCourseModule {}
