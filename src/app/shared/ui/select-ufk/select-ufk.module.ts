import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectUfkComponent } from './select-ufk.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [SelectUfkComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class SelectUfkModule {}
