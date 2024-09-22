import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WriteReflectionComponent } from './write-reflection.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { FileUploadModule } from 'src/app/shared/ui/file-upload/file-upload.module'
import { SelectCourseModule } from 'src/app/shared/ui/select-course/select-course.module'
import { SelectStudentModule } from 'src/app/shared/ui/select-student/select-student.module'
import { SelectSubjectModule } from 'src/app/shared/ui/select-subject/select-subject.module'
import { SelectUfkModule } from 'src/app/shared/ui/select-ufk/select-ufk.module'

@NgModule({
  declarations: [WriteReflectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SelectUfkModule,
    SelectSubjectModule,
    SelectCourseModule,
    FileUploadModule,
  ],
})
export class WriteReflectionModule {}
