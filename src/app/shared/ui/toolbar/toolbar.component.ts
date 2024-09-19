import { Component } from '@angular/core'
import { AuthService, IAuthStatus } from 'src/app/core/auth/auth.service'

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar
      color="primary"
      *ngIf="{
        status: authService.authStatus$ | async,
        user: authService.currentUser$ | async
      } as auth"
      style="position: fixed; top: 0; left: 0; right: 0; z-index: 2"
      class="mat-elevation-z8"
    >
      <a mat-button routerLink="/home" class=""><h1>Uetikon</h1></a>
      <span style="width: 2rem"></span>

      <!-- Student Routes -->
      <a
        class="link"
        *ngIf="auth.status?.userRole === 'student'"
        mat-button
        routerLink="/student/courses"
        routerLinkActive="active-link"
        >Kurse</a
      >
      <a
        class="link"
        *ngIf="auth.status?.userRole === 'student'"
        mat-button
        routerLink="/student/competences"
        routerLinkActive="active-link"
        >Kompetenzen</a
      >

      <!-- Teacher Routes -->

      <div *ngIf="auth.status?.userRole === 'teacher'">
        <a
          class="link"
          mat-button
          routerLink="/teacher/courses"
          routerLinkActive="active-link"
          >Kurse</a
        >
        <a
          class="link"
          mat-button
          routerLink="/teacher/study-jobs"
          routerLinkActive="active-link"
          >Bibliothek</a
        >
        <!-- <a
      *ngIf="isPermitted(5, auth.status)"
      class="link"
      mat-button
      routerLink="/teacher/students"
      routerLinkActive="active-link"
      >Leistungen</a
    > -->
        <a
          class="link"
          mat-button
          routerLink="/teacher/ufk"
          routerLinkActive="active-link"
          >ÜFK</a
        >
      </div>

      <!-- Administrator Routes -->

      <div *ngIf="auth.status?.userRole === 'administrator'">
        <a
          class="link"
          mat-button
          routerLink="/administrator/competences"
          routerLinkActive="active-link"
          >Kompetenzen</a
        >
        <a
          class="link"
          mat-button
          routerLink="/administrator/teachers"
          routerLinkActive="active-link"
          >Lehrer</a
        >
        <a
          class="link"
          mat-button
          routerLink="/administrator/students"
          routerLinkActive="active-link"
          >Schüler</a
        >
      </div>

      <!-- Shared Routes -->
      <span class="flex-spacer"></span>

      <button
        *ngIf="auth?.status?.isAuthenticated"
        mat-mini-fab
        routerLink="/profile"
        matTooltip="Profile"
        aria-label="Profile"
        [ngClass]="{ 'hide-fab': auth.user?.picture }"
      >
        <img
          *ngIf="auth.user?.picture"
          class="image-cropper"
          [src]="auth?.user?.picture"
        />
        <mat-icon *ngIf="!auth.user?.picture">account_circle</mat-icon>
      </button>
      <span style="width: 0.5rem"></span>

      <button
        *ngIf="auth?.status?.isAuthenticated"
        mat-mini-fab
        routerLink="/login"
        matTooltip="Logout"
        aria-label="Logout"
        (click)="logout()"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
      .active-link {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }
    `,
    `
      .link {
        margin-right: 20px;
      }
    `,
    `
      .active-accent-link {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
        transform: translateY(-5px);
      }
    `,
  ],
})
export class ToolbarComponent {
  constructor(
    protected authService: AuthService // private matIconRegistry: MatIconRegistry,
  ) // private domSanitizer: DomSanitizer
  {
    // this.matIconRegistry.addSvgIcon(
    //   `teacher`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/teacher.svg')
    // )
    // this.matIconRegistry.addSvgIcon(
    //   'student',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/student.svg')
    // )
  }

  logout() {
    this.authService.logout()
  }

  isPermitted(permission_id: number, status: IAuthStatus | null) {
    if (!status) return false
    if (!status.permissions) return false
    const permission = status.permissions.find(
      (permission) => permission.id === permission_id
    )
    if (!permission) return false
    return permission.read
  }
}
