import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingJobComponent } from './loading-job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [LoadingJobComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingJobComponent],
})
export class LoadingJobModule {}
