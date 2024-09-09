import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MandetoryPathComponent } from './mandetory-path.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { PlanDateModule } from 'src/app/shared/ui/plan-date/plan-date.module'

@NgModule({
  declarations: [MandetoryPathComponent],
  imports: [CommonModule, MaterialModule, PlanDateModule],
  exports: [MandetoryPathComponent],
})
export class MandetoryPathModule {}
