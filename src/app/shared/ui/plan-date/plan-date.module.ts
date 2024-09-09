import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlanDateComponent } from './plan-date.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [PlanDateComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class PlanDateModule {}
