import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core'
import { IFolder } from 'src/app/interfaces'

@Component({
  selector: 'app-rename-folder [folder]',
  template: ` <input
      #input
      type="text"
      [(ngModel)]="folder.name"
      (click)="stopProgation($event)"
      (keyup)="setName($event)"
    />
    <button mat-button (click)="setFocus()"><mat-icon>edit</mat-icon></button>`,
  styles: [
    `
      input {
        border: 2px solid #ddd;
        background-color: #fff;
        color: #333;
        font-size: 1rem;
        padding: 0.4rem;
        border-radius: 4px;
        outline: none;
        transition: border-color 0.3s ease-in-out;
      }
    `,
    `
      input:focus {
        border-color: #aaa;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class RenameFolderComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>
  @Input('folder') folder!: IFolder
  @Output('set-name') setNameEvent = new EventEmitter<IFolder>()

  ngAfterViewInit() {
    this.setFocus()
  }

  setFocus() {
    setTimeout(() => {
      this.input.nativeElement.focus()
    }, 0)
  }

  stopProgation(event: Event) {
    event.stopPropagation()
  }

  setName(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.setNameEvent.emit(this.folder)
    }
  }
}
