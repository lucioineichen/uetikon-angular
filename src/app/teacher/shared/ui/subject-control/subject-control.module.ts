import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SubjectControlComponent } from './subject-control.component'

@NgModule({
  declarations: [SubjectControlComponent],
  exports: [SubjectControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SubjectControlModule {}
