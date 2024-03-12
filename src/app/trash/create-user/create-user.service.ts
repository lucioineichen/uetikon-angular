import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Role } from '../../core/auth/auth.enum'
import { environment } from '../../core/environment/environment.demo'

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
    role: Role,
    roleSpecific: {
      student?: {
        grade: number
      }
      teacher?: {}
    }
  ): Observable<boolean> {
    const userProperties = {
      email,
      password,
      firstName,
      lastName,
      role,
    }
    const body = {
      ...userProperties,
      ...(role === 'student' ? roleSpecific.student : roleSpecific.teacher),
    }
    console.log('createUser() body sent with http: ', body)
    return this.httpClient.post<boolean>(
      `${environment.baseUrl}/register`,
      body
    )
  }
}
