import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Role } from '../auth/auth.enum'
import { environment } from '../environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  constructor(private httpClient: HttpClient) {}

  createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role: Role
  ): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.baseUrl}/register`, {
      email,
      password,
      firstName,
      lastName,
      role,
    })
  }
}
