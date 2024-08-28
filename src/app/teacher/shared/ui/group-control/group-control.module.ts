import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GroupControlComponent } from './group-control.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [GroupControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [GroupControlComponent],
})
export class GroupControlModule {}
