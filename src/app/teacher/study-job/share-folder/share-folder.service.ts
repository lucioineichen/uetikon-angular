import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IShareFolder } from '../study-job-list/study-jobs.service'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class ShareFolderService {
  constructor(private http: HttpClient) {}

  getShareFolder(id: number): Observable<IShareFolder> {
    return this.http.get<IShareFolder>(
      `${environment.baseUrl}/share-folder/${id}`
    )
  }
}
