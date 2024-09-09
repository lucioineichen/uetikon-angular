import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudyPathComponent } from './study-path.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'

@NgModule({
  declarations: [StudyPathComponent],
  imports: [CommonModule, MaterialModule],
  exports: [StudyPathComponent],
})
export class StudyPathModule {}
