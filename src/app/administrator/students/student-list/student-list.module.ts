import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentListComponent } from './students.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { ClassFormComponent } from './ui/class-form/class-form.component'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [StudentListComponent, ClassFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, ToolbarModule],
})
export class StudentListModule {}
