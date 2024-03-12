import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableComponent } from './table.component'
import { SubTableComponent } from './sub-table/sub-table.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [TableComponent, SubTableComponent],
  exports: [TableComponent, SubTableComponent],
  imports: [CommonModule, MaterialModule],
})
export class CompetenceTableModule {}
