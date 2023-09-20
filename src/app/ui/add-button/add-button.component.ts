import { Component, EventEmitter, Input, Output } from '@angular/core'

export interface IExtraButton {
  icon?: string
  hint?: string
  name?: string
}

@Component({
  selector: 'app-add-button',
  template: `
    <div class="container">
      <button
        mat-mini-fab
        [matTooltip]="hint || 'Erstellen'"
        aria-label="Erstellen"
        color="primary"
        (click)="clickMain()"
      >
        <mat-icon>{{ icon || 'add' }}</mat-icon>
      </button>

      <div *ngFor="let extra of extraButtons" style="padding-top: 5px;">
        <button
          mat-mini-fab
          [matTooltip]="extra.hint || 'Erstellen'"
          aria-label="Erstellen"
          color="primary"
          (click)="clickExtra(extra.name)"
        >
          <mat-icon>{{ extra.icon || 'add' }}</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        position: fixed;
        right: 0;
        padding: 16px;
        z-index: 1000;
      }
    `,
  ],
})
export class AddButtonComponent {
  @Input() icon?: string
  @Input() hint?: string
  @Input() extraButtons?: IExtraButton[]
  @Output() extraClick = new EventEmitter<string>()
  @Output() mainClick = new EventEmitter<void>()

  clickExtra(name?: string) {
    this.extraClick.emit(name || 'extra')
  }

  clickMain() {
    this.mainClick.emit()
  }
}
