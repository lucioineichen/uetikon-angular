import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { CacheService } from './cache.service'

interface IJwtToken {
  id: string
  email: string
  role: string
  picture: string
  token: string
}

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = this.cacheService.getItem<IJwtToken>('jwt')
    const authRequest = req.clone({
      setHeaders: { authorization: `Bearer ${jwt?.token}` },
    })
    return next.handle(authRequest).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          this.router.navigate(['/login'], {
            queryParams: this.router.routerState.snapshot.url.includes('login')
              ? {}
              : {
                  redirectUrl: this.router.routerState.snapshot.url,
                },
          })
        }
        return throwError(() => new Error(err))
      })
    )
  }
}
