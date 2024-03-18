import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateUserComponent } from '../../features/create-user/create-user.component'
import { LoginComponent } from '../../features/login/login.component'
import { AuthGuard } from '../auth/auth-guard.service'
import { Role } from '../auth/auth.enum'
import { PageNotFoundComponent } from '../../features/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
  {
    path: 'administrator',
    loadChildren: () =>
      import('../../administrator/core/administrator.module').then(
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
      import('../../parent/parent.module').then((m) => m.ParentModule),
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Parent,
    },
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('../../teacher/core/teacher.module').then((m) => m.TeacherModule),
    canActivate: [AuthGuard],
    data: {
      expectedRole: Role.Teacher,
    },
  },
  {
    path: 'student',
    loadChildren: () =>
      import('../../student/core/student.module').then((m) => m.StudentModule),
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
