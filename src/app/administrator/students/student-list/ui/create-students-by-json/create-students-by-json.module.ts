import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateStudentsByJsonComponent } from './create-students-by-json.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [CreateStudentsByJsonComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CreateStudentsByJsonModule {}
