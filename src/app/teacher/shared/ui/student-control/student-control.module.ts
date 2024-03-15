import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { StudentControlComponent } from './student-control.component'

@NgModule({
  declarations: [StudentControlComponent],
  exports: [StudentControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class StudentControlModule {}
