import { Injectable } from '@angular/core'
import { ISubject, competences } from './competences.data'
import { uk } from './uk.data'

export interface ISubCompetence {
  _id: string
  name: string
}

export interface ICompetence {
  _id: string
  name: string
  subCompetences: ISubCompetence[]
}

export interface ISubTopic {
  _id: string
  name: string
  competences: ICompetence[]
}

export interface ITopic {
  _id: string
  name: string
  subTopics?: ISubTopic[]
  competences?: ICompetence[]
}

@Injectable({
  providedIn: 'root',
})
export class CompetencesDataService {
  get_competences() {
    return competences.concat(this.get_uk())
  }

  get_uk() {
    return uk
  }

  get_subjects(): { _id: string; name: string }[] {
    return competences.concat(this.get_uk()).map((subject) => {
      return { _id: subject._id, name: subject.name }
    })
  }

  // log_uk_sub_with_id() {
  //   // console.log(uk.topics)
  //   let newSubjects: ISubject[] = competences.map((subject) => {
  //     return {
  //       _id: subject._id,
  //       name: subject.name,
  //       short: subject.short,
  //       topics: subject.topics.map((topic) => {
  //         return {
  //           _id: topic._id,
  //           name: topic.name,
  //           subTopics: topic.subTopics?.map((subTopic) => {
  //             return {
  //               _id: subTopic._id,
  //               name: subTopic.name,
  //               competences: subTopic.competences?.map((competence) => {
  //                 return {
  //                   _id: competence._id,
  //                   name: competence.name,
  //                   subCompetences: competence.subCompetences.map(
  //                     (subCompetence, index) => {
  //                       return {
  //                         _id: competence._id + 'sc' + index,
  //                         name: subCompetence as string,
  //                       }
  //                     }
  //                   ),
  //                 }
  //               }),
  //             }
  //           }),
  //           competences: topic.competences?.map((competence) => {
  //             return {
  //               _id: competence._id,
  //               name: competence.name,
  //               subCompetences: competence.subCompetences.map(
  //                 (subCompetence, index) => {
  //                   return {
  //                     _id: competence._id + 'sc' + index,
  //                     name: subCompetence as string,
  //                   }
  //                 }
  //               ),
  //             }
  //           }),
  //         }
  //       }),
  //     }
  //   })

  //   console.log(JSON.stringify(newSubjects))
  // }
}
