import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateUserComponent } from './trash/create-user/create-user.component'
import { LoginComponent } from './core/login/login.component'
import { AuthGuard } from './core/auth/auth-guard.service'
import { Role } from './core/auth/auth.enum'
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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
      expectedRole: Role.Parent,
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
