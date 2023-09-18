import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-add-button',
  template: `
    <div class="container">
      <button
        mat-mini-fab
        [matTooltip]="hint ||'Erstellen'"
        aria-label="Erstellen"
        color="primary"
      >
        <mat-icon>{{ icon || 'add' }}</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .container {
        position: absolute;
        right: 0;
        padding: 16px;
      }
    `,
  ],
})
export class AddButtonComponent {
  @Input() icon?: string
  @Input() hint?: string

}
