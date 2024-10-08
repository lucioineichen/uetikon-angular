import { Injectable } from '@angular/core'
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router'
import { Observable, map, mergeMap, of, tap } from 'rxjs'

import { DialogService } from '../../shared/ui/dialogs/ui.service'
import { Role } from './auth.enum'
import { AuthService } from './auth.service'
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    protected authService: AuthService,
    protected router: Router,
    private uiService: DialogService
  ) {}

  canMatch: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> => {
    return this.checkLogin()
  }

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> => {
    return this.checkLogin(route)
  }

  canActivateChild: CanActivateChildFn = (
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> => {
    return this.checkLogin(childRoute)
  }

  protected checkLogin(route?: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.authStatus$.pipe(
      mergeMap((status) => {
        if (status) return of(status)
        return this.authService
          .getCurrentUser()
          .pipe(
            map((user) =>
              this.authService.transformJwtToken(this.authService.getToken()!)
            )
          )
      }),
      map((authStatus) => {
        const roleMatch = route
          ? this.checkRoleMatch(authStatus.userRole, route)
          : true
        const allowLogin = authStatus.isAuthenticated && roleMatch
        if (!allowLogin) {
          // console.log('authStatus', authStatus)
          // console.log('expectedRole', route?.data['expectedRole'])
          this.showAlert(authStatus.isAuthenticated, roleMatch)
          this.router.navigate(['login'], {
            queryParams: {
              redirectUrl: this.getResolvedUrl(route),
            },
          })
        }
        return allowLogin
      })
    )
  }

  private checkRoleMatch(role: Role, route: ActivatedRouteSnapshot): boolean {
    if (route.data['expectedRole']) return role === route.data['expectedRole']
    return true
  }

  private showAlert(isAuth: boolean, roleMatch: boolean) {
    if (!isAuth) {
      this.uiService.showToast('You must login to continue')
    }
    if (!roleMatch) {
      this.uiService.showToast(
        'You do not have the permissions to view this resource'
      )
    }
  }

  getResolvedUrl(route?: ActivatedRouteSnapshot): string {
    if (!route) {
      return ''
    }
    return route.pathFromRoot
      .map((r) => r.url.map((segment) => segment.toString()).join('/'))
      .join('/')
      .replace('//', '/')
  }
}
