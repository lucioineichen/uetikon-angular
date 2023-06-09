import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentHomeComponent } from './student-home/student-home.component'
import { StudentRoutingModule } from './student-routing.module'
import { StudentCoursesComponent } from './student-courses/student-courses.component'
import { StudentService } from './student.service'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [StudentHomeComponent, StudentCoursesComponent],
  imports: [CommonModule, StudentRoutingModule, MaterialModule],
  providers: [StudentService],
})
export class StudentModule {}
