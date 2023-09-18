import { Routes } from '@angular/router'
import { CreateUserComponent } from './create-user/create-user.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './auth/auth-guard.service'
import { Role } from './auth/auth.enum'
import { CompetencesComponent } from './competences/competences.component'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
  {
    path: 'administrator',
    loadChildren: () =>
      import('./administrator/administrator.module').then(
        (m) => m.AdministratorModule
      ),
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Administrator,
    },
  },
  {
    path: 'parent',
    loadChildren: () =>
      import('./parent/parent.module').then((m) => m.ParentModule),
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Administrator,
    },
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Teacher,
    },
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Student,
    },
  },
  { path: '**', component: PageNotFoundComponent },
]
