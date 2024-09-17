import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingUfkTableComponent } from './loading-ufk-table.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [LoadingUfkTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingUfkTableComponent],
})
export class LoadingUfkTableModule {}
