import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectClassesComponent } from './select-classes.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SelectClassesComponent],
  exports: [SelectClassesComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SelectClassesModule {}
