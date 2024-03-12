import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectStudentsComponent } from './select-students.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SelectStudentsComponent],
  exports: [SelectStudentsComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectStudentsModule {}
