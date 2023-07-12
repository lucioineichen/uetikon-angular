import { NgModule } from '@angular/core'
import { StudyJobExpectationComponent } from './ui/study-job-expectation/study-job-expectation.component'
import { MaterialModule } from './material.module'
import { CommonModule } from '@angular/common'
import { TaskComponent } from './ui/task/task.component'

const components = [StudyJobExpectationComponent, TaskComponent]

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: components,
  exports: components,
})
export class UiModule {}
