import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { environment } from '../environment/environment.demo'
import { IUser, User } from '../user/user'
import { Role } from './auth.enum'
import { AuthService, IAuthStatus, IJwtToken } from './auth.service'
import { CacheService } from './cache.service'
import { ActivatedRoute, Router } from '@angular/router'

@Injectable()
export class DjangoRestApiAuthService extends AuthService {
  constructor(
    cacheService: CacheService,
    router: Router,
    private httpClient: HttpClient
  ) {
    super(cacheService, router)
  }

  authProvider(email: string, password: string): Observable<IJwtToken> {
    const authProvider$ = this.httpClient.post<IJwtToken>(
      `${environment.baseUrl}/login`,
      {
        email,
        password,
      }
    )

    return authProvider$
  }

  transformJwtToken(token: IJwtToken): IAuthStatus {
    const transformedToken: IAuthStatus = {
      isAuthenticated: token.token ? true : false,
      userRole: token.role === 'teacher' ? Role.Teacher : Role.Student,
      userId: token.id,
    }
    return transformedToken
  }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get<IUser>(`${environment.baseUrl}/user/me`).pipe(
      map(User.Build),
      tap((currentUser) => {
        this.currentUser$.next(currentUser)
        console.log('currentUser: ', currentUser)
      })
    )
  }
}
