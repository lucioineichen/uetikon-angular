import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressTableComponent } from './progress-table.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [ProgressTableComponent],
  imports: [CommonModule, MaterialModule],
})
export class ProgressTableModule {}
