import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EnterTaskProgressComponent } from './enter-task-progress.component'
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [EnterTaskProgressComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class EnterTaskProgressModule {}
