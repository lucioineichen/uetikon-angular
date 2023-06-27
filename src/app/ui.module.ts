import { NgModule } from '@angular/core'

import { StudyJobExpectationComponent } from './ui/study-job-expectation/study-job-expectation.component'
import { MaterialModule } from './material.module'

@NgModule({
  declarations: [StudyJobExpectationComponent],
  imports: [MaterialModule],
  exports: [StudyJobExpectationComponent],
})
export class UiModule {}
