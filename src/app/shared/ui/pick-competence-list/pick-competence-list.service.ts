import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject, map, of, tap } from 'rxjs'
import { CompetencesDataService } from '../../data/competences_data/competences-data.service'
import {
  ISubTopic,
  ISubject,
  ITopic,
} from '../../data/competences_data/competences.data'
import { IStringRef } from '../../utils/interfaces'
import { MatDialog } from '@angular/material/dialog'
import { PickCompetenceListComponent } from './pick-competence-list.component'

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
  readonly selectedCompetenceList$ = new BehaviorSubject<IPickCompetence[]>([])
  readonly subjectList$ = new BehaviorSubject<undefined | IPickSubject[]>(
    undefined
  )
  readonly selectedSubject$ = new BehaviorSubject<undefined | IPickSubject>(
    undefined
  )
  readonly filteredCompetenceList$ = new BehaviorSubject<
    undefined | IPickCompetence[]
  >(undefined)

  constructor(
    private competenceData: CompetencesDataService,
    private dialog: MatDialog
  ) {}

  pickCompetenceList(selectedList: string[]) {
    this.selectedCompetenceList$.next([])
    const dialogRef = this.dialog.open(PickCompetenceListComponent, {
      data: { selectedList },
    })

    return dialogRef.afterClosed().pipe(
      map((isConfirm) =>
        isConfirm ? this.selectedCompetenceList$.value : undefined
      ),
      map((competenceList) => {
        if (!competenceList) return competenceList
        return competenceList.map((comp) => {
          return { _id: comp._id, name: comp.name }
        })
      })
    )
  }

  toggleSelection(competence: IPickCompetence, isSelected: boolean) {
    isSelected
      ? this.addCompetence(competence)
      : this.removeCompetence(competence)
    if (!this.subjectList$.value) return
    competence.isSelected = isSelected
  }

  openSubject(subject: IPickSubject | undefined) {
    this.selectedSubject$.next(subject)
  }

  updateFilteredCompetenceList(search: string | null) {
    if (search == null || search == '') {
      this.filteredCompetenceList$.next(undefined)
      return
    }
    if (!this.subjectList$.value) return
    let competences = this.extractCompetenceList(this.subjectList$.value)

    competences = competences.filter((competence) =>
      competence.name.includes(search)
    )
    this.filteredCompetenceList$.next(competences)
  }

  updateSelectedSubject(_id?: string | null) {
    if (!this.subjectList$.value) return
    if (_id == undefined) this.selectedSubject$.next(undefined)
    const subject = this.subjectList$.value.find(
      (subject) => subject._id == _id
    )
    this.selectedSubject$.next(subject)
  }

  getSubjectList(): Observable<IPickSubject[]> {
    return of(this.competenceData.get_competences()).pipe(
      map((subjectList) => subjectList.map((subj) => this.mapSubject(subj)))
    )
  }

  private addCompetence(competence: IPickCompetence) {
    const competenceList = this.selectedCompetenceList$.value
    const index = competenceList.findIndex((comp) => comp._id == competence._id)
    if (index == -1)
      this.selectedCompetenceList$.next(competenceList.concat(competence))
  }

  private removeCompetence(competence: IPickCompetence) {
    const competenceList = this.selectedCompetenceList$.value
    this.selectedCompetenceList$.next(
      competenceList.filter((comp) => comp._id != competence._id)
    )
  }

  extractCompetenceList(subjectList: IPickSubject[]) {
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
    return competences
  }

  private mapCompetence(competence: IStringRef): IPickCompetence {
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
      competenceList: subTopic.competences.map((comp) =>
        this.mapCompetence(comp)
      ),
    }
  }

  private mapTopic(topic: ITopic): IPickTopic {
    return {
      _id: topic._id,
      name: topic.name,
      competenceList:
        topic.competences?.map((comp) => this.mapCompetence(comp)) ?? [],
      subTopicList:
        topic.subTopics?.map((subTopic) => this.mapSubTopic(subTopic)) ?? [],
    }
  }

  private mapSubject(subject: ISubject): IPickSubject {
    return {
      _id: subject._id,
      name: subject.name,
      topicList: subject.topics.map((topic) => this.mapTopic(topic)),
    }
  }
}
