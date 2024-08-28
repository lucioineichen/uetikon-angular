import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChangeStatusComponent } from './change-status.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ChangeStatusComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class ChangeStatusModule {}
