import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { UiService } from 'src/app/common/ui.service'
import { environment } from 'src/app/environment/environment.demo'
import * as competences from './competences.json'

export interface ICompetence {
  competenceNumber: number
  competenceName: string
  subCompetences: string
}

export interface ISubTopic {
  subTopicCount: number
  subTopicName: string
  competences?: ICompetence[]
  subCompetences?: string[]
}

export interface ITopic {
  topicNumber: number
  topicName: string
  subTopics?: ISubTopic[]
  competences?: ICompetence[]
}

export interface ISubject {
  subjectName: string
  subjectShort: string
  topics: ITopic[]
}

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  readonly competences$ = new BehaviorSubject<ICompetence[] | undefined>(
    undefined
  )

  constructor(
    private httpClient: HttpClient,
    private uiService: UiService,
    private dialog: MatDialog
  ) {}

  private getCompetence(id: number) {
    return this.httpClient.get<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`
    )
  }

  updateCompetences(id: number) {
    this.getCompetence(id)
      .pipe(
        tap((teacher) => {
          this.competences$.next(teacher)
          console.log(teacher)
        }),
        catchError((err) => {
          this.competences$.error(err)
          this.uiService.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  deleteCompetence(id: number) {
    if (!this.competences$.value) return
    return this.httpClient.delete<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`
    )
  }

  putCompetence(data: any, id: number) {
    if (!this.competences$.value) return
    return this.httpClient.put<ICompetence[]>(
      `${environment.baseUrl}/administrator/competences/${id}`,
      data
    )
  }

  initCompetences() {
    console.log(competences)
    return this.httpClient
      .post<ICompetence[]>(
        `${environment.baseUrl}/administrator/competences/init`,
        competences
      )
      .subscribe()
  }
}
