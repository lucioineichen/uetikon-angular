import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatComponent } from './chat.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ChatComponent],
  exports: [ChatComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class ChatModule {}
