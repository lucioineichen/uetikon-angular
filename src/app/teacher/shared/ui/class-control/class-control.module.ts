import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ClassControlComponent } from './class-control.component'

@NgModule({
  declarations: [ClassControlComponent],
  exports: [ClassControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class ClassControlModule {}
