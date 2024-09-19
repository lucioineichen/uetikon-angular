import { CommonModule } from '@angular/common'
import { MaterialModule } from '../shared/ui/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ParentComponent } from './parent.component'
import { NgModule } from '@angular/core'
import { ParentRoutingModule } from './parent-routing.module'
import { ToolbarModule } from '../shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ParentRoutingModule,
    ToolbarModule,
  ],
})
export class ParentModule {}
