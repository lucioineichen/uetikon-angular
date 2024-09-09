import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { IUser, User } from './user'
import { Role } from './auth.enum'
import {
  AuthService,
  IAuthStatus,
  IJwtToken,
  IPermission,
} from './auth.service'
import { CacheService } from './cache.service'
import { ActivatedRoute, Router } from '@angular/router'
import { environment } from '../environment/environment.demo'

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
    let role = Role.None
    let permissions: undefined | IPermission[] = undefined
    if (token.role === 'teacher') {
      role = Role.Teacher
      permissions = token.permissions
    } else if (token.role === 'student') {
      role = Role.Student
    } else if (token.role === 'administrator') {
      role = Role.Administrator
    } else if (token.role === 'parent') {
      role = Role.Parent
    }
    const transformedToken: IAuthStatus = {
      isAuthenticated: token.token ? true : false,
      userRole: role,
      userId: token.id,
    }
    if (token.role === 'teacher') {
      transformedToken.permissions = permissions
    }
    return transformedToken
  }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get<IUser>(`${environment.baseUrl}/user/me`).pipe(
      tap(console.log),
      map(User.Build),
      tap((currentUser) => {
        this.currentUser$.next(currentUser)
      })
    )
  }
}
