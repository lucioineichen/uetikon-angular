import { Component } from '@angular/core'
import { AuthService } from './auth/auth.service'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
  ],
})
export class AppComponent {
  constructor(
    protected authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `teacher`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/teacher.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'student',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/student.svg')
    )
  }
}
