import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfirmDeleteComponent } from './confirm-delete.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [ConfirmDeleteComponent],
  imports: [CommonModule, MaterialModule],
})
export class ConfirmDeleteModule {}
