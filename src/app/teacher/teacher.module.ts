import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TeacherRoutingModule } from './teacher-routing.module'
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'

@NgModule({
  declarations: [TeacherHomeComponent],
  imports: [CommonModule, TeacherRoutingModule],
})
export class TeacherModule {}
