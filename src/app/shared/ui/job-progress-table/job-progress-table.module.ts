import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobProgressTableComponent } from './job-progress-table.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [JobProgressTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [JobProgressTableComponent],
})
export class JobProgressTableModule {}
