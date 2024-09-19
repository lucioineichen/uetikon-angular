import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenceTreeComponent } from './competence-tree.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CompetenceTreeComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    CompetenceTreeComponent
  ]
})
export class CompetenceTreeModule { }
