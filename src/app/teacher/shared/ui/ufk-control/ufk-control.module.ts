import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkControlComponent } from './ufk-control.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { SelectCompetencesModule } from 'src/app/shared/ui/select-competences/select-competences.module'

@NgModule({
  declarations: [UfkControlComponent],
  exports: [UfkControlComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class UfkControlModule {}
