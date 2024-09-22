import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkReflectionTableComponent } from './ufk-reflection-table.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { FileModule } from 'src/app/shared/ui/file/file.module'
import { WriteReflectionModule } from '../write-reflection/write-reflection.module'

@NgModule({
  declarations: [UfkReflectionTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FileModule,
    WriteReflectionModule,
  ],
  exports: [UfkReflectionTableComponent],
})
export class UfkReflectionTableModule {}
