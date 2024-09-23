import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudyMaterialComponent } from './study-material.component'
import { FileModule } from '../file/file.module'

@NgModule({
  declarations: [StudyMaterialComponent],
  imports: [CommonModule, FileModule],
  exports: [StudyMaterialComponent],
})
export class StudyMaterialModule {}
