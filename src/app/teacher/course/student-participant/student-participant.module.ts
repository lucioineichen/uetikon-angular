import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentParticipantComponent } from './student-participant.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FileModule } from 'src/app/shared/ui/file/file.module'

@NgModule({
  declarations: [StudentParticipantComponent],
  imports: [CommonModule, MaterialModule, FileModule],
})
export class StudentParticipantModule {}
