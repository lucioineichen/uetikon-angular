import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChooseTeacherComponent } from './choose-teacher.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [ChooseTeacherComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [ChooseTeacherComponent],
})
export class ChooseTeacherModule {}
