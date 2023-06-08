import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable, of, tap } from 'rxjs'
import { transformError } from '../common/common'
import { environment } from '../environment/environment.demo'
import { IUser, User } from '../user/user'
import { Role } from './auth.enum'
import { AuthService, IAuthStatus, IJwtToken } from './auth.service'

@Injectable()
export class DjangoRestApiAuthService extends AuthService {
  constructor(public httpClient: HttpClient) {
    super()
  }

  protected authProvider(
    email: string,
    password: string
  ): Observable<IJwtToken> {
    const authProvider$ = this.httpClient.post<IJwtToken>(
      `${environment.baseUrl}/login`,
      {
        email,
        password,
      }
    )

    authProvider$.subscribe()

    return authProvider$
  }

  protected transformJwtToken(token: IJwtToken): IAuthStatus {
    const transformedToken: IAuthStatus = {
      isAuthenticated: token.token ? true : false,
      userRole: token.role === 'teacher' ? Role.Teacher : Role.Student,
      userId: token.id,
    }
    return transformedToken
  }

  protected getCurrentUser(): Observable<User> {
    console.log('before htttp client')
    console.log('this: ', this)
    const res = this.httpClient
      .get<IUser>(`${environment.baseUrl}/user/me`)
      .pipe(map(User.Build))

    console.log('after hjttp')
    return res
  }
}
