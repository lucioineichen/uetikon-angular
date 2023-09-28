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
import { TaskComponent } from './ui/task/task.component'
import { ConfirmDeletionDialogComponent } from './common/confirm-deletion-dialog.component'
import { CompetencesComponent } from './competences/competences.component'
import { CompetenceFormComponent } from './competences/competence-form/competence-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectCompetencesFormComponent } from './common/select-competences-form/select-competences-form.component'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    SimpleDialogComponent,
    ConfirmDeletionDialogComponent,
    CompetencesComponent,
    CompetenceFormComponent,
    ProfileComponent,
    SelectCompetencesFormComponent,
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
  exports: [],
})
export class AppModule {}
