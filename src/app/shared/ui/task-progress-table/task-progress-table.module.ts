import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskProgressTableComponent } from './task-progress-table.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    TaskProgressTableComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    TaskProgressTableComponent
  ]
})
export class TaskProgressTableModule { }
