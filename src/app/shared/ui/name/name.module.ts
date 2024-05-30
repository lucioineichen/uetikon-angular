import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NameComponent } from './name.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [NameComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class NameModule {}
