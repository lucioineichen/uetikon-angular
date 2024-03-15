import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentListComponent } from './students.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class StudentListModule {}
