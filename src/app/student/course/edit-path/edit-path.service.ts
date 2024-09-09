import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthService } from 'src/app/core/auth/auth.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IContainerPath } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class EditPathService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getContainerPaths(courseId: number) {
    return this.http.get<IContainerPath[]>(
      `${environment.baseUrl}/course/${courseId}/student/${this.auth.currentUser$.value._id}/edit-path`
    )
  }
}
