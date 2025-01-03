import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProfileService } from './profile.service'
import { BehaviorSubject, map, tap } from 'rxjs'
import { User } from 'src/app/core/auth/user'
import { SubSink } from 'subsink'
import { Location } from '@angular/common'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { ChangePasswordService } from './change-password/change-password.service'

@Component({
  selector: 'app-profile',
  template: `
    <div style="position: fixed; width: 100%; top: 0; z-index: 100">
      <mat-toolbar color="primary" class="mat-elevation-z8 toolbar">
        <a mat-button (click)="navigateBack()"
          ><mat-icon>arrow_back</mat-icon> Zurück</a
        >
        <span style="margin-left: 20px;" *ngIf="user$ | async as user">{{
          user.fullName
        }}</span>
        <span class="flex-spacer"></span>
        <button mat-icon-button style="float: right;" (click)="openSettings()">
          <mat-icon>settings</mat-icon>
        </button>
      </mat-toolbar>

      <mat-card class="card">
        <mat-card-header>
          <mat-card-title> Benutzer Informationen </mat-card-title>
        </mat-card-header>
        <mat-card-content
          style="padding-top: 20px;"
          *ngIf="user$ | async as user"
        >
          <div class="info">
            Rolle: <mat-chip>{{ user.role | titlecase }}</mat-chip>
          </div>
          <div class="info">Email: {{ user.email }}</div>
          <div class="info">Vorname: {{ user.name.firstName }}</div>
          <div class="info" *ngIf="user.name.middleName">
            Zweitname: {{ user.name.middleName }}
          </div>
          <div class="info">Nachname: {{ user.name.lastName }}</div>
          <div class="info" *ngIf="!user.temporaryPassword">
            Passwort: ************
          </div>
          <div class="info" *ngIf="user.temporaryPassword">
            Passwort:
            <a class="info file-link" (click)="onChangePassword()"
              >Temporäres Passwort Ändern</a
            >
          </div>
          <button
            class="edit-btn"
            mat-raised-button
            color="primary"
            (click)="openSettings()"
          >
            Bearbeiten
          </button>
        </mat-card-content>
      </mat-card>

      <mat-card class="card">
        <mat-card-header>
          <mat-card-title> Support Ticket </mat-card-title>
          <mat-card-subtitle>Sehe alle Deine Support Tickets</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content style="padding-top: 20px;">
          <div class="info file-link" (click)="writeTicket()">
            Checke Status Deiner Tickets
          </div>
          <div class="info file-link" (click)="writeTicket()">
            Schreibe Support Ticket
          </div>
          <div class="info file-link" (click)="writeTicket()">Q&A</div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .card {
        margin-top: 50px;
        margin-left: 20%;
        margin-right: 30%;
        max-width: 800px;
        padding: 10px;
      }
    `,
    `
      .file-link {
        text-decoration: none;
        color: #0366d6;
        cursor: pointer;
      }

      .file-link:hover {
        text-decoration: underline;
      }
    `,
    `
      .info {
        margin-bottom: 15px;
        height: 32px;
      }
    `,
    `
      .edit-btn {
        position: absolute;
        bottom: 30px;
        right: 30px;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  readonly user$ = new BehaviorSubject<User | undefined>(undefined)

  constructor(
    private service: ProfileService,
    private location: Location,
    private ui: DialogService,
    protected changePassword: ChangePasswordService
  ) {}

  onChangePassword() {
    this.changePassword
      .changePassword()
      .pipe(tap(() => this.updateUser()))
      .subscribe()
  }

  openSettings() {
    this.ui.showToast('Funktion nicht implementiert')
  }

  editInfo() {
    this.ui.showToast('Funktion nicht implementiert')
  }

  writeTicket() {
    this.ui.showToast('Funktion nicht implementiert')
  }

  navigateBack() {
    this.location.back()
  }

  ngOnInit(): void {
    this.updateUser()
  }

  private updateUser() {
    this.service
      .getUser()
      .pipe(
        map((user) => User.Build(user)),
        tap((user) => this.user$.next(user)),
        tap(console.info)
      )
      .subscribe()
  }
}
