import { Component } from '@angular/core'

@Component({
  selector: 'app-administrator',
  template: `
    <app-toolbar></app-toolbar>
    <div style="height: 100px;"></div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AdministratorComponent {}
