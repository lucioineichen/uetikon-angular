import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChooserComponent } from './chooser.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ChooserComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class ChooserModule {}
