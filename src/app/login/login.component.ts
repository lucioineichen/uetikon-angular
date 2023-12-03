import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { catchError, combineLatest, filter, tap } from 'rxjs'
import { AuthService } from '../auth/auth.service'
import { SubSink } from 'subsink'
import { UiService } from '../common/ui.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      div {
        margin-top: 32px;
      }
    `,
  ],
})
export class LoginComponent {
  private subs = new SubSink()
  loginForm!: FormGroup
  loginError = ''
  redirectUrl: string | null = null
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService
  ) {
    this.subs.sink = route.queryParamMap.subscribe((params) => {
      const redirectUrl = params.get('redirectUrl')
      this.redirectUrl = redirectUrl
    })
  }

  ngOnInit() {
    this.authService.logout()
    this.buildLoginForm()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['lehrer@email.com', [Validators.required, Validators.email]],
      password: [
        'password',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
    })
  }

  async login(submittedForm: FormGroup) {
    this.subs.sink = this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .pipe(
        tap((role) => {
          this.uiService.showToast('Willkommen')
          const url = this.redirectUrl || '/' + role
          this.router.navigate([url])
        }),
        catchError(() => {
          this.uiService.showToast('Falsches Passwort oder Email')
          this.loginError = 'Falsches Passwort oder Email'
          return ''
        })
      )

      .subscribe()
  }
}
