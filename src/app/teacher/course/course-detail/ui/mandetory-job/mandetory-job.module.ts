import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MandetoryJobComponent } from './mandetory-job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [MandetoryJobComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MandetoryJobComponent],
})
export class MandetoryJobModule {}
