import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile.component'
import { MaterialModule } from 'src/app/shared/ui/material.module'
import { ChangePasswordModule } from './change-password/change-password.module'

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, MaterialModule, ChangePasswordModule],
})
export class ProfileModule {}
