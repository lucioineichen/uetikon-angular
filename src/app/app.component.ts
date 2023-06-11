import { Component } from '@angular/core'
import { AuthService } from './auth/auth.service'
import { Role } from './auth/auth.enum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
