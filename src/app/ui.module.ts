import { NgModule } from '@angular/core'
import { StudyJobExpectationComponent } from './ui/study-job-expectation/study-job-expectation.component'
import { MaterialModule } from './material.module'
import { CommonModule } from '@angular/common'
import { TaskComponent } from './ui/task/task.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RenameFolderComponent } from './ui/rename-folder/rename-folder.component'

const components = [
  StudyJobExpectationComponent,
  TaskComponent,
  RenameFolderComponent,
]

@NgModule({
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: components,
  exports: components,
})
export class UiModule {}
