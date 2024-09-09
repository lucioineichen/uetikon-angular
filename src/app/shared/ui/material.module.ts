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
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select'
import { MatMenuModule } from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatTreeModule } from '@angular/material/tree'
import { MatChipsModule } from '@angular/material/chips'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge'
import { StatusPipe } from './status.pipe'

const modules: any[] = [
  MatChipsModule,
  MatTreeModule,
  MatNativeDateModule,
  MatDatepickerModule,
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
  MatProgressBarModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatSelectModule,
  MatMenuModule,
  MatTableModule,
  MatAutocompleteModule,
  MatBadgeModule,
]

@NgModule({
  imports: modules,
  exports: modules.concat(StatusPipe),
  declarations: [StatusPipe],
})
export class MaterialModule {}
