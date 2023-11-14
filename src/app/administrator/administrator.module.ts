import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UiModule } from '../ui.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AdministratorRoutingModule } from './administrator-routing.module'
import { NgModule } from '@angular/core'
import { AdministratorComponent } from './administrator.component'
import { CompetencesComponent } from './competences/competences.component'
import { TeachersComponent } from './teachers/teachers.component'
import { StudentsComponent } from './students/students.component'
import { ParentsComponent } from './parents/parents.component'
import { TeacherFormComponent } from './teachers/teacher-form/teacher-form.component'
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { ClassFormComponent } from './students/class-form/class-form.component';
import { StudentComponent } from './students/student/student.component'

@NgModule({
  declarations: [
    AdministratorComponent,
    CompetencesComponent,
    TeachersComponent,
    StudentsComponent,
    ParentsComponent,
    TeacherFormComponent,
    TeacherComponent,
    StudentFormComponent,
    ClassFormComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    FlexLayoutModule,
  ],
})
export class AdministratorModule {}
