import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChooseJobComponent } from './choose-study-jobs-dialog.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [ChooseJobComponent],
  imports: [CommonModule, MaterialModule],
})
export class ChooseJobModule {}
