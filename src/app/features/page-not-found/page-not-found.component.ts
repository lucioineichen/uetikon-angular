import { Component } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-toolbar></app-toolbar>
    <div style="height: 64px;"></div>
    <p>
      This page doesn't exist. Go back to
      <a routerLink="/login">login</a>.
    </p>
  `,
})
export class PageNotFoundComponent {}
