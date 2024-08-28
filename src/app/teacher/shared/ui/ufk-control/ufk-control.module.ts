import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UfkControlComponent } from './ufk-control.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { PickCompetenceListModule } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.module'

@NgModule({
  declarations: [UfkControlComponent],
  exports: [UfkControlComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, PickCompetenceListModule],
})
export class UfkControlModule {}
