import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ChooseDependencyComponent } from './choose-dependency.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [ChooseDependencyComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class ChooseDependencyModule {}
