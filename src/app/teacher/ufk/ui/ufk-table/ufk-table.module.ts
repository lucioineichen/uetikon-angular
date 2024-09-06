import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkTableComponent } from './ufk-table.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { FileModule } from 'src/app/shared/ui/file/file.module'

@NgModule({
  declarations: [UfkTableComponent],
  exports: [UfkTableComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FileModule],
})
export class UfkTableModule {}
