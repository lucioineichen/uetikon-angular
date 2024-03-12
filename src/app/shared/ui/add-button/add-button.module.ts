import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddButtonComponent } from './add-button.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [AddButtonComponent],
  exports: [AddButtonComponent],
  imports: [CommonModule, MaterialModule],
})
export class AddButtonModule {}
