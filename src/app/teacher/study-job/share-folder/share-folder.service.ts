import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IShareFolder } from '../study-job-list/study-jobs.service'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/app/core/environment/environment.demo'
import { ISaveAt } from '../job/job.service'
import { ChooseTeacherService } from 'src/app/shared/ui/choose-teacher/choose-teacher.service'
import { MatDialog } from '@angular/material/dialog'
import { ChooseTeacherComponent } from 'src/app/shared/ui/choose-teacher/choose-teacher.component'

@Injectable({
  providedIn: 'root',
})
export class ShareFolderService {
  constructor(
    private http: HttpClient,
    private chooseTeacher: ChooseTeacherService,
    private dialog: MatDialog
  ) {}

  addTeacher() {
    this.dialog.open(ChooseTeacherComponent)
    this.chooseTeacher.getTeacherList().subscribe()
  }

  getShareFolder(id: number): Observable<IShareFolder> {
    return this.http.get<IShareFolder>(
      `${environment.baseUrl}/share-folder/${id}`
    )
  }

  postFolder(folderInfo: {
    name: string
    saveAt: {
      storeFolderId: number | null
      shareFolderId: number | null
      toRoot: boolean
    }
  }) {
    return this.http.post(`${environment.baseUrl}/store-folders`, folderInfo)
  }

  putJob(jobId: number, saveAt: ISaveAt) {
    return this.http.put(`${environment.baseUrl}/study-job/${jobId}`, {
      saveAt,
    })
  }

  postJob(jobInfo: {
    name: string
    saveAt: {
      storeFolderId: number | null
      shareFolderId: number | null
      toRoot: boolean
    }
  }): Observable<{}> {
    return this.http.post(`${environment.baseUrl}/study-jobs`, jobInfo)
  }

  putFolder(
    id: number,
    putData: {
      name?: string
      saveAt?: ISaveAt
      teacherWriteList?: number[]
      teacherReadList?: number[]
    }
  ) {
    return this.http.put(`${environment.baseUrl}/share-folder/${id}`, putData)
  }
}
