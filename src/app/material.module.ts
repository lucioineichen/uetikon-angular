import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatListModule } from '@angular/material/list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatRippleModule } from '@angular/material/core'

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule,
  MatListModule,
  MatTooltipModule,
  MatDividerModule,
  MatGridListModule,
  MatCheckboxModule,
  MatRippleModule,
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
