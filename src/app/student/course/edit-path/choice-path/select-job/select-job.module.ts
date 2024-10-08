import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectJobComponent } from './select-job.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SelectJobComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectJobModule {}
