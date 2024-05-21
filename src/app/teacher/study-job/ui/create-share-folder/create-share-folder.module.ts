import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateShareFolderComponent } from './create-share-folder.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { ChooseTeacherModule } from 'src/app/shared/ui/choose-teacher/choose-teacher.module'

@NgModule({
  declarations: [CreateShareFolderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ChooseTeacherModule,
  ],
})
export class CreateShareFolderModule {}
