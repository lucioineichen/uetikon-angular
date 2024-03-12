import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/app/core/environment/environment.demo'
import { IFolder, IStudyJob } from 'src/app/shared/utils/interfaces'

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  constructor(private http: HttpClient) {}

  renameFolder(folder: IFolder): Observable<IFolder> {
    return this.http.put<IFolder>(
      `${environment.baseUrl}/teacher/folder/${folder._id}`,
      {
        name: folder.name,
      }
    )
  }

  deleteFolder(folder: IFolder) {
    return this.http.delete<void>(
      `${environment.baseUrl}/teacher/folder/${folder._id}`
    )
  }

  createFolder(parentFolder: IFolder, name: string): Observable<IFolder> {
    const parentId = parentFolder._id ? parentFolder._id : 0

    return this.http.post<IFolder>(
      `${environment.baseUrl}/teacher/folder/${parentId}/child-folders`,
      { name }
    )
  }

  createStudyJob(data: any, folderId?: number) {
    return this.http.post<IStudyJob>(
      `${environment.baseUrl}/teacher/study-jobs/folder/${
        folderId ? folderId : 0
      }`,
      data
    )
  }
}
