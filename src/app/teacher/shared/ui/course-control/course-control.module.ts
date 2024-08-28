import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseControlComponent } from './course-control.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [CourseControlComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [CourseControlComponent],
})
export class CourseControlModule {}
