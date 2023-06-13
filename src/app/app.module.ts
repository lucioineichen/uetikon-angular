import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HomeComponent } from './home/home.component'
import { AuthService } from './auth/auth.service'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CreateUserComponent } from './create-user/create-user.component'
import { SimpleDialogComponent } from './common/simple-dialog.component'
import { DjangoRestApiAuthService } from './auth/auth.djangoRestApi.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    SimpleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [
    { provide: AuthService, useClass: DjangoRestApiAuthService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
