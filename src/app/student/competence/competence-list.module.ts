import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'
import { CompetenceListComponent } from './competences.component'
import { UfkTableModule } from 'src/app/teacher/ufk/ui/ufk-table/ufk-table.module'
import { UfkReflectionTableModule } from './ui/ufk-reflection-table/ufk-reflection-table.module'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { WriteReflectionModule } from './ui/write-reflection/write-reflection.module'

@NgModule({
  declarations: [CompetenceListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToolbarModule,
    UfkTableModule,
    UfkReflectionTableModule,
    AddButtonModule,
    WriteReflectionModule,
  ],
})
export class CompetenceListModule {}
