import { Component } from '@angular/core'
import { AuthService } from './auth/auth.service'
import { Role } from './auth/auth.enum'

@Component({
  selector: 'app-root',
  template: `<mat-toolbar
      color="primary"
      *ngIf="{
        status: authService.authStatus$ | async,
        user: authService.currentUser$ | async
      } as auth"
    >
      <a mat-button routerLink="/home"><h1>Uetikon</h1></a>
      <span style="width: 2rem"></span>
      <a
        *ngIf="auth.status?.userRole === 'student'"
        mat-button
        routerLink="/student/courses"
        routerLinkActive="active-link"
        >Kurse</a
      >
      <span class="flex-spacer"></span>
      <button
        *ngIf="auth?.status?.isAuthenticated"
        mat-mini-fab
        routerLink="/user/profile"
        matTooltip="Profile"
        aria-label="User Profile"
        [ngClass]="{ 'hide-fab': auth.user?.picture }"
      >
        <img
          *ngIf="auth.user?.picture"
          class="image-cropper"
          [src]="auth?.user?.picture"
        />
        <mat-icon *ngIf="!auth.user?.picture">account_circle</mat-icon>
      </button>
      <button
        *ngIf="auth?.status?.isAuthenticated"
        mat-mini-fab
        routerLink="/login"
        matTooltip="Logout"
        aria-label="Logout"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>`,
  styles: [
    `
      .active-link {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }
    `,
  ],
})
export class AppComponent {
  constructor(protected authService: AuthService) {}
}
