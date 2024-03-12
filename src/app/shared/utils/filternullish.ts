import {
  Observable,
  OperatorFunction,
  UnaryFunction,
  filter,
  pipe,
  tap,
} from 'rxjs'

export function filterNullish<T>(
  callback?: () => void
): UnaryFunction<Observable<T | null | undefined>, Observable<T>> {
  if (callback)
    return pipe(
      tap((x) => {
        if (!x) {
          callback
        }
      }),
      filter((x) => x != null) as OperatorFunction<T | null | undefined, T>
    )
  return pipe(
    filter((x) => x != null) as OperatorFunction<T | null | undefined, T>
  )
}
