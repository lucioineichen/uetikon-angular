import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { CreateChoiceComponent } from './create-choice.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [CreateChoiceComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CreateChoiceModule {}
