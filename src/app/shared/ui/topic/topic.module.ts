import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TopicComponent } from './topic.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [TopicComponent],
  exports: [TopicComponent],
  imports: [CommonModule, MaterialModule],
})
export class TopicModule {}
