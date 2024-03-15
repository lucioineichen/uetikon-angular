import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentDetailComponent } from './student.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FileModule } from 'src/app/shared/ui/file/file.module'

@NgModule({
  declarations: [StudentDetailComponent],
  imports: [CommonModule, MaterialModule, FileModule],
})
export class StudentDetailModule {}
