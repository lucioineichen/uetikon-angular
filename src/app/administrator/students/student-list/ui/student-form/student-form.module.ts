import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentFormComponent } from './student-form.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [StudentFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class StudentFormModule {}
