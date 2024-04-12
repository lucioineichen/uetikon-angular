import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobChoicesComponent } from './job-choices.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [JobChoicesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [JobChoicesComponent],
})
export class JobChoicesModule {}
