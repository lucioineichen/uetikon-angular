import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ParentComponent } from './parents.component'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [ParentComponent],
  imports: [CommonModule, ToolbarModule],
})
export class ParentModule {}
