import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChoicePathComponent } from './choice-path.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { SelectJobModule } from './select-job/select-job.module'

@NgModule({
  declarations: [ChoicePathComponent],
  imports: [CommonModule, MaterialModule, SelectJobModule],
  exports: [ChoicePathComponent],
})
export class ChoicePathModule {}
