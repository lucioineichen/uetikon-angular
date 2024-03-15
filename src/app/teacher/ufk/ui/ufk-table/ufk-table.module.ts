import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkTableComponent } from './ufk-table.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [UfkTableComponent],
  exports: [UfkTableComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class UfkTableModule {}
