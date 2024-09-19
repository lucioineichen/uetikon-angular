import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentCoursesComponent } from './student-courses.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [StudentCoursesComponent],
  imports: [CommonModule, MaterialModule, ToolbarModule],
})
export class CourseListModule {}
