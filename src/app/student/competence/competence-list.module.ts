import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'
import { CompetenceListComponent } from './competences.component'

@NgModule({
  declarations: [CompetenceListComponent],
  imports: [CommonModule, MaterialModule, ToolbarModule],
})
export class CompetenceListModule {}
