import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  template: `Redirecting...`,
})
export class HomeComponent {
  constructor(private auth: AuthService, private router: Router) {
    const role = this.auth.getToken()?.role
    if (role === 'student') {
      this.router.navigate(['student'])
    } else if (role === 'teacher') {
      this.router.navigate(['teacher'])
    } else if (role === 'parent') {
      this.router.navigate(['parent'])
    } else if (role === 'administrator') {
      this.router.navigate(['administrator'])
    } else {
      this.router.navigate(['login'])
    }
  }
}
