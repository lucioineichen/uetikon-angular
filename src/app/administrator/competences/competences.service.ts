import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import * as competences from './competences.json'

// export interface ICompetence {
//   competenceNumber: number
//   competenceName: string
//   subCompetences: string
// }

// export interface ISubTopic {
//   subTopicCount: number
//   subTopicName: string
//   competences?: ICompetence[]
//   subCompetences?: string[]
// }

// export interface ITopic {
//   topicNumber: number
//   topicName: string
//   subTopics?: ISubTopic[]
//   competences?: ICompetence[]
// }

// export interface ISubject {
//   subjectName: string
//   subjectShort: string
//   topics: ITopic[]
// }

export interface ICompetence {
  _id: number
  name: string
  subCompetences: string[]
}

export interface ISubTopic {
  _id: number
  name: string
  competences: ICompetence[]
}

export interface ITopic {
  _id: number
  name: string
  subTopics?: ISubTopic[]
  competences?: ICompetence[]
}

export interface ISubject {
  _id: number
  name: string
  topics: ITopic[]
}

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  readonly subjects$ = new BehaviorSubject<ISubject[] | undefined>(undefined)

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getCompetences() {
    return this.httpClient.get<ISubject[]>(
      `${environment.baseUrl}/administrator/competences`
    )
  }

  updateCompetences() {
    this.getCompetences()
      .pipe(
        tap((subjects) => {
          this.subjects$.next(subjects)
        }),
        catchError((err) => {
          this.subjects$.error(err)
          this.uiService.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  deleteCompetence(id: number) {
    return this.httpClient.delete<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`
    )
  }

  putCompetence(data: any, id: number) {
    return this.httpClient.put<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`,
      data
    )
  }

  initCompetences() {
    return this.httpClient
      .post<ICompetence[]>(
        `${environment.baseUrl}/administrator/competences/init`,
        competences
      )
      .subscribe()
  }
}
