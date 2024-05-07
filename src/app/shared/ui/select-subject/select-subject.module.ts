import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectSubjectComponent } from './select-subject.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SelectSubjectComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [SelectSubjectComponent],
})
export class SelectSubjectModule {}
