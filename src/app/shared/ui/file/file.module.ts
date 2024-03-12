import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FileComponent } from './file.component'

@NgModule({
  declarations: [FileComponent],
  exports: [FileComponent],
  imports: [CommonModule],
})
export class FileModule {}
