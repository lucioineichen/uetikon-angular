import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: ` <button mat-raised-button color="primary" routerLink="/login">
      Login
    </button>
    <button mat-raised-button color="primary" routerLink="/create-user">
      Create User
    </button>
    <button mat-raised-button color="primary" routerLink="/competences">
      Kompetenzen
    </button>`,
})
export class HomeComponent {}
