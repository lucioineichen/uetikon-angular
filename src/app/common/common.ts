import { HttpErrorResponse } from '@angular/common/http'
import {
  Observable,
  OperatorFunction,
  UnaryFunction,
  filter,
  pipe,
  throwError,
} from 'rxjs'

export function transformError(error: HttpErrorResponse | string) {
  let errorMessage = 'An unknown error has occurred'
  if (typeof error === 'string') {
    errorMessage = error
  } else if (error.error instanceof ErrorEvent) {
    errorMessage = `Error! ${error.error.message}`
  } else if (error.status) {
    errorMessage = `Request failed with ${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    errorMessage = error.message
  }
  return throwError(() => new Error(errorMessage))
}

export function filterNullish<T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> {
  return pipe(
    filter((x) => x != null) as OperatorFunction<T | null | undefined, T>
  )
}
