import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StudentComponent } from './student.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AddButtonModule } from 'src/app/shared/ui/add-button/add-button.module'
import { SelectClassesModule } from 'src/app/shared/ui/select-classes/select-classes.module'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AddButtonModule,
    SelectClassesModule,
  ],
})
export class StudentDetailModule {}
