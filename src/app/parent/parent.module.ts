import { CommonModule } from '@angular/common'
import { MaterialModule } from '../shared/ui/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ParentComponent } from './parent.component'
import { NgModule } from '@angular/core'
import { ParentRoutingModule } from './parent-routing.module'

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    ParentRoutingModule,
  ],
})
export class ParentModule {}
