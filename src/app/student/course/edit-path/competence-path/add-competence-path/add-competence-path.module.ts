import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddCompetencePathComponent } from './add-competence-path.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { ChooseJobModule } from 'src/app/teacher/shared/ui/choose-job/choose-job.module'

@NgModule({
  declarations: [AddCompetencePathComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, ChooseJobModule],
})
export class AddCompetencePathModule {}
