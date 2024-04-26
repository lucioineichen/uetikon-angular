import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateMandetoryComponent } from './create-mandetory.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ChooseDependencyModule } from '../../../../shared/ui/choose-dependency/choose-dependency.module'

@NgModule({
  declarations: [CreateMandetoryComponent],
  imports: [CommonModule, MaterialModule, ChooseDependencyModule],
  exports: [CreateMandetoryComponent],
})
export class CreateMandetoryModule {}
