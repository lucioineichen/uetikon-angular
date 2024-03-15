import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkComponent } from './ufk.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { TeacherControlModule } from '../shared/ui/teacher-control/teacher-control.module'
import { SubjectControlModule } from '../shared/ui/subject-control/subject-control.module'
import { StudentControlModule } from '../shared/ui/student-control/student-control.module'
import { ClassControlModule } from '../shared/ui/class-control/class-control.module'
import { UfkTableModule } from './ui/ufk-table/ufk-table.module'
import { UfkControlModule } from '../shared/ui/ufk-control/ufk-control.module'
import { AddUfkModule } from './ui/add-ufk/add-ufk.module'

@NgModule({
  declarations: [UfkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AddButtonModule,
    TeacherControlModule,
    SubjectControlModule,
    StudentControlModule,
    ClassControlModule,
    UfkTableModule,
    UfkControlModule,
    AddUfkModule,
  ],
})
export class UfkModule {}
