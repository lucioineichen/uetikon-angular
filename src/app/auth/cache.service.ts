import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  getItem<T>(key: string): T | null {
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
  setItem(key: string, data: object | string) {
    console.log('set item ', data, ' to key ', key)
    if (typeof data === 'string') {
      localStorage.setItem(key, data)
    }
    localStorage.setItem(key, JSON.stringify(data))
  }
  removeItem(key: string) {
    localStorage.removeItem(key)
  }
  clear() {
    localStorage.clear()
  }
}
