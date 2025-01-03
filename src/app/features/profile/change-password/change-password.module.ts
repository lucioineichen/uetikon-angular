import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChangePasswordComponent } from './change-password.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class ChangePasswordModule {}
