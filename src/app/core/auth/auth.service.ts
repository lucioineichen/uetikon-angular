import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  catchError,
  map,
  mergeMap,
  Observable,
  tap,
} from 'rxjs'

import { Role } from './auth.enum'
import { ActivatedRoute, Router } from '@angular/router'
import { IUser, User } from './user'
import { CacheService } from './cache.service'

export interface IPermission {
  id: number
  name: string
  read: boolean
  write: boolean
}

export interface IJwtToken {
  id: string
  email: string
  role: string
  permissions?: IPermission[]
  token: string
}

export const errorJwtToken: IJwtToken = {
  id: '',
  email: '',
  role: Role.None,
  token: '',
}

export interface IAuthStatus {
  isAuthenticated: boolean
  userRole: Role
  userId: string
  permissions?: IPermission[]
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
export abstract class AuthService implements IAuthService {
  constructor(private cacheService: CacheService, private router: Router) {
    if (this.getToken()) {
      setTimeout(() => {
        this.getCurrentUser()
          .pipe(
            tap(() => {
              const authStatus = this.getAuthStatusFromToken()
              if (!authStatus) return

              this.authStatus$.next(authStatus)
            })
          )
          .subscribe()
      }, 0)
    }
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
        return currentUser.role
      })
    )
  }

  logout(): void {
    this.clearToken()
    setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0)
  }

  getToken(): IJwtToken | null {
    return this.cacheService.getItem<IJwtToken>('jwt')
  }

  protected setToken(jwt: IJwtToken) {
    this.cacheService.setItem('jwt', jwt)
  }

  protected clearToken() {
    this.cacheService.removeItem('jwt')
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
