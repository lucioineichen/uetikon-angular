import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateUserComponent } from './create-user.component'
import { MaterialModule } from '../../shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { ToolbarModule } from 'src/app/shared/ui/toolbar/toolbar.module'

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, ToolbarModule],
})
export class CreateUserModule {}
