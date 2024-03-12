import { CommonModule } from '@angular/common'
import { MaterialModule } from '../shared/ui/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AdministratorRoutingModule } from './administrator-routing.module'
import { NgModule } from '@angular/core'
import { AdministratorComponent } from './administrator.component'
import { CompetencesComponent } from './competences/competences.component'
import { TeachersComponent } from './teachers/teachers.component'
import { StudentsComponent } from './students/students.component'
import { ParentsComponent } from './parents/parents.component'
import { TeacherFormComponent } from './teachers/teacher-form/teacher-form.component'
import { TeacherComponent } from './teachers/teacher/teacher.component'
import { StudentFormComponent } from './students/student-form/student-form.component'
import { ClassFormComponent } from './students/class-form/class-form.component'
import { StudentComponent } from './students/student/student.component'
import { SelectClassesModule } from '../shared/ui/select-classes/select-classes.module'
import { CompetenceModule } from '../shared/ui/competence/competence.module'
import { TopicModule } from '../shared/ui/topic/topic.module'
import { SubTopicModule } from '../shared/ui/sub-topic/sub-topic.module'
import { AddButtonModule } from '../shared/ui/add-button/add-button.module'

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
    FlexLayoutModule,
    SelectClassesModule,
    CompetenceModule,
    TopicModule,
    SubTopicModule,
    AddButtonModule,
  ],
})
export class AdministratorModule {}
