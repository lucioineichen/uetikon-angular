import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IStudyJob } from 'src/app/shared/utils/interfaces'

export interface ISaveAt {
  toRoot: boolean
  shareFolderId: number | null
  storeFolderId: number | null
}

export interface IPutJob {
  saveAt?: ISaveAt
  name?: string
  status?: number
  isPublished?: { value: boolean }
  description?: string
  credits?: number
  subjectId?: string
  competenceList?: string[]
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  readonly job$ = new BehaviorSubject<IStudyJob | undefined>(undefined)

  constructor(private http: HttpClient, private ui: DialogService) {}

  private getStudyJob(id: number): Observable<IStudyJob> {
    return this.http.get<IStudyJob>(`${environment.baseUrl}/study-job/${id}`)
  }

  update(id: number) {
    this.getStudyJob(id)
      .pipe(
        tap((job) => this.job$.next(job)),
        catchError((err) => {
          this.ui.showToast('LernJob konnte nicht geladen werden')
          this.job$.error(err)
          return err
        })
      )
      .subscribe()
  }

  putJob(id: number, putJob: IPutJob) {
    return this.http.put(`${environment.baseUrl}/study-job/${id}`, putJob)
  }

  deleteJob(id: number) {
    return this.http.delete(`${environment.baseUrl}/study-job/${id}`)
  }
}
