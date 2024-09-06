import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkControlComponent } from './ufk-control.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [UfkControlComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [UfkControlComponent],
})
export class UfkControlModule {}
