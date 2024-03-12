import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from '../../shared/ui/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SimpleDialogComponent } from '../../shared/ui/dialogs/simple-dialog.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { ConfirmDeletionDialogComponent } from '../../shared/ui/dialogs/confirm-deletion-dialog.component'
import { DjangoRestApiAuthService } from '../auth/auth.djangoRestApi.service'
import { AuthHttpInterceptor } from '../auth/auth-http-interceptor'
import { AuthService } from '../auth/auth.service'
import { PageNotFoundComponent } from '../../features/page-not-found/page-not-found.component'
import { LoginModule } from '../../features/login/login.module'
import { CreateUserModule } from '../../features/create-user/create-user.module'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SimpleDialogComponent,
    ConfirmDeletionDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    LoginModule,
    CreateUserModule,
  ],
  providers: [
    { provide: AuthService, useClass: DjangoRestApiAuthService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
