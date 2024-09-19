import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkComponent } from './ufk.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { TeacherControlModule } from '../shared/ui/teacher-control/teacher-control.module'
import { ClassControlModule } from '../shared/ui/class-control/class-control.module'
import { UfkTableModule } from './ui/ufk-table/ufk-table.module'
import { AddUfkModule } from './ui/add-ufk/add-ufk.module'
import { SelectStudentModule } from 'src/app/shared/ui/select-student/select-student.module'
import { StudentControlModule } from 'src/app/shared/ui/student-control/student-control.module'
import { CourseControlModule } from 'src/app/shared/ui/course-control/course-control.module'
import { SubjectControlModule } from 'src/app/shared/ui/subject-control/subject-control.module'
import { UfkControlModule } from 'src/app/shared/ui/ufk-control/ufk-control.module'
import { LoadingUfkTableModule } from './ui/loading-ufk-table/loading-ufk-table.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [UfkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AddButtonModule,
    TeacherControlModule,
    StudentControlModule,
    ClassControlModule,
    UfkTableModule,
    UfkControlModule,
    AddUfkModule,
    SelectStudentModule,
    CourseControlModule,
    SubjectControlModule,
    LoadingUfkTableModule,
    ToolbarModule,
  ],
})
export class UfkModule {}
