import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddUfkComponent } from './add-ufk.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectStudentModule } from 'src/app/shared/ui/select-student/select-student.module'
import { SelectUfkModule } from 'src/app/shared/ui/select-ufk/select-ufk.module'
import { SelectSubjectModule } from 'src/app/shared/ui/select-subject/select-subject.module'
import { SelectCourseModule } from 'src/app/shared/ui/select-course/select-course.module'
import { FileUploadModule } from 'src/app/shared/ui/file-upload/file-upload.module'

@NgModule({
  declarations: [AddUfkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectStudentModule,
    SelectUfkModule,
    SelectSubjectModule,
    SelectCourseModule,
    FileUploadModule,
  ],
})
export class AddUfkModule {}
