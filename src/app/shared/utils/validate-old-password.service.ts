import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ValidateOldPasswordService {
  constructor(private http: HttpClient) {}

  // Replace with your actual backend API endpoint
  validateOldPassword(oldPassword: string): Observable<boolean> {
    return this.http.post<boolean>(
      `${environment.baseUrl}/validate-old-password`,
      { oldPassword }
    )
  }
}
