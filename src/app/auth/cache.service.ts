import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService {
  protected getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    console.log(
      'get item from key ',
      key,
      ' returns ',
      data ? JSON.parse(data) : null
    )
    if (data != null) {
      return JSON.parse(data)
    }
    return null
  }
  protected setItem(key: string, data: object | string) {
    console.log('set item ', data, ' to key ', key)
    if (typeof data === 'string') {
      localStorage.setItem(key, data)
    }
    localStorage.setItem(key, JSON.stringify(data))
  }
  protected removeItem(key: string) {
    localStorage.removeItem(key)
  }
  protected clear() {
    localStorage.clear()
  }
}
