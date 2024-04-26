import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject, map, of } from 'rxjs'
import { CompetencesDataService } from '../../data/competences_data/competences-data.service'
import {
  ISubTopic,
  ISubject,
  ITopic,
} from '../../data/competences_data/competences.data'
import { ICompetence } from '../../utils/interfaces'

export interface IPickCompetence {
  _id: string
  name: string
  isSelected: boolean
}

export interface IPickSubTopic {
  _id: string
  name: string
  competenceList: {
    _id: string
    name: string
    isSelected: boolean
  }[]
}

export interface IPickTopic {
  _id: string
  name: string
  competenceList: IPickCompetence[]
  subTopicList: IPickSubTopic[]
}

export interface IPickSubject {
  _id: string
  name: string
  topicList: IPickTopic[]
}

@Injectable({
  providedIn: 'root',
})
export class PickCompetenceListService {
  readonly selectedCompetenceList$ = new BehaviorSubject<string[]>([])
  readonly subjectList$ = new BehaviorSubject<undefined | IPickSubject[]>(
    undefined
  )
  readonly selectedSubject$ = new BehaviorSubject<undefined | IPickSubject>(
    undefined
  )

  constructor(private competenceData: CompetencesDataService) {}

  toggleSelection(_id: string, isSelected: boolean) {
    isSelected ? this.addCompetence(_id) : this.removeCompetence(_id)
    const subjectList = this.subjectList$.value
    if (!subjectList) return
    const topics = subjectList.reduce(
      (topicList, subject) => topicList.concat(subject.topicList),
      [] as IPickTopic[]
    )
    const subTopics = topics.reduce(
      (subTopicList, topic) => subTopicList.concat(topic.subTopicList),
      [] as IPickSubTopic[]
    )
    const indirectCompetences = subTopics.reduce(
      (competenceList, subTopic) =>
        competenceList.concat(subTopic.competenceList),
      [] as IPickCompetence[]
    )
    const directCompetences = topics.reduce(
      (competenceList, topic) => competenceList.concat(topic.competenceList),
      [] as IPickCompetence[]
    )
    const competences = indirectCompetences.concat(directCompetences)
  }

  getSubjectList(): Observable<IPickSubject[]> {
    return of(this.competenceData.get_competences()).pipe(
      map((subjectList) => subjectList.map(this.mapSubject))
    )
  }

  openSubject(subject: IPickSubject | undefined) {
    this.selectedSubject$.next(subject)
  }

  private addCompetence(_id: string) {
    const competenceList = this.selectedCompetenceList$.value
    const index = competenceList.findIndex((compId) => compId == _id)
    if (index == -1)
      this.selectedCompetenceList$.next(competenceList.concat(_id))
  }

  private removeCompetence(_id: string) {
    const competenceList = this.selectedCompetenceList$.value
    this.selectedCompetenceList$.next(
      competenceList.filter((compId) => compId != _id)
    )
  }

  private mapCompetence(competence: ICompetence): IPickCompetence {
    return {
      _id: competence._id,
      name: competence.name,
      isSelected: false,
    }
  }

  private mapSubTopic(subTopic: ISubTopic): IPickSubTopic {
    return {
      _id: subTopic._id,
      name: subTopic.name,
      competenceList: subTopic.competences.map(this.mapCompetence),
    }
  }

  private mapTopic(topic: ITopic): IPickTopic {
    return {
      _id: topic._id,
      name: topic.name,
      competenceList: topic.competences?.map(this.mapCompetence) ?? [],
      subTopicList: topic.subTopics?.map(this.mapSubTopic) ?? [],
    }
  }

  private mapSubject(subject: ISubject): IPickSubject {
    return {
      _id: subject._id,
      name: subject.name,
      topicList: subject.topics.map(this.mapTopic),
    }
  }
}
