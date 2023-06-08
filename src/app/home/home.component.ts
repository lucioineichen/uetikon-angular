import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: ` <button mat-raised-button color="primary" routerLink="/login">
      Login
    </button>
    <button mat-raised-button color="primary" routerLink="/create-user">
      Create User
    </button>`,
})
export class HomeComponent {}
