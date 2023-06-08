import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  mergeMap,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs'
import { transformError } from '../common/common'
import { IUser, User } from '../user/user'
import { Role } from './auth.enum'
import { CacheService } from './cache.service'

export interface IJwtToken {
  id: string
  email: string
  role: string
  picture: string
  token: string
}

export const errorJwtToken: IJwtToken = {
  id: '',
  email: '',
  role: Role.None,
  picture: '',
  token: '',
}

export interface IAuthStatus {
  isAuthenticated: boolean
  userRole: Role
  userId: string
}

export const defaultAuthStatus: IAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: '',
}

export interface IAuthService {
  readonly authStatus$: BehaviorSubject<IAuthStatus>
  readonly currentUser$: BehaviorSubject<IUser>
  login(email: string, password: string): Observable<Role>
  logout(clearToken?: boolean): void
  getToken(): IJwtToken | null
}

@Injectable()
export abstract class AuthService extends CacheService implements IAuthService {
  constructor() {
    super()
    if (this.getToken())
      this.authStatus$.next(this.getAuthStatusFromToken() as IAuthStatus)
  }

  readonly authStatus$ = new BehaviorSubject<IAuthStatus>(defaultAuthStatus)
  readonly currentUser$ = new BehaviorSubject<IUser>(new User())

  login(email: string, password: string): Observable<Role> {
    this.clearToken()

    return this.authProvider(email, password).pipe(
      tap((token) => this.setToken(token)),
      map(this.transformJwtToken),
      tap((status) => {
        this.authStatus$.next(status)
      }),
      mergeMap(() => this.getCurrentUser()),
      map((currentUser) => {
        if (!currentUser.email) throw new Error('invalid currentUser')
        return currentUser.role
      })
    )
  }

  logout(clearToken?: boolean | undefined): void {
    if (clearToken) this.clearToken()
    setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0)
  }

  getToken(): IJwtToken | null {
    return this.getItem<IJwtToken>('jwt')
  }

  protected setToken(jwt: IJwtToken) {
    this.setItem('jwt', jwt)
  }

  protected clearToken() {
    this.removeItem('jwt')
  }

  protected getAuthStatusFromToken(): IAuthStatus | null {
    const token = this.getToken()

    if (!token) return null
    return this.transformJwtToken(token)
  }

  protected abstract authProvider(
    email: string,
    password: string
  ): Observable<IJwtToken>
  protected abstract transformJwtToken(token: IJwtToken): IAuthStatus
  protected abstract getCurrentUser(): Observable<User>
}
