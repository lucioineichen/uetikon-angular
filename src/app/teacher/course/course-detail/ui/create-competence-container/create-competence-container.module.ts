import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateCompetenceContainerComponent } from './create-competence-container.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
// import { SelectCompetencesModule } from 'src/app/shared/ui/select-competences/select-competences.module'
import { PickCompetenceListModule } from 'src/app/shared/ui/pick-competence-list/pick-competence-list.module'

@NgModule({
  declarations: [CreateCompetenceContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PickCompetenceListModule,
  ],
})
export class CreateCompetenceContainerModule {}
