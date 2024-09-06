import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubjectControlComponent } from './subject-control.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SubjectControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [SubjectControlComponent],
})
export class SubjectControlModule {}
