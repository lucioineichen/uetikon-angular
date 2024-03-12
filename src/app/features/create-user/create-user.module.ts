import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CreateUserComponent } from './create-user.component'
import { MaterialModule } from '../../shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class CreateUserModule {}
