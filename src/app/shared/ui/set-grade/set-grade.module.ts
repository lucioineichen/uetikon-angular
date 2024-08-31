import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SetGradeComponent } from './set-grade.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [SetGradeComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class SetGradeModule {}
