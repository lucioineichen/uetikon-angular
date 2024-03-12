import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubTopicComponent } from './sub-topic.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [SubTopicComponent],
  exports: [SubTopicComponent],
  imports: [CommonModule, MaterialModule],
})
export class SubTopicModule {}
