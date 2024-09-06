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

export interface IRawSubject {
  _id: string;
  name: string
  short: string
}

@Injectable({
  providedIn: 'root',
})
export class CompetencesDataService {
  tree(competenceList: string[]): ISubject[] {
    const tree: ISubject[] = []

    for (let competenceId of competenceList) {
      let id: any = competenceId
      id = id.split(/(s|t|c)/)
      const subjectPlace = Number(id[2])
      const topicPlace = Number(id[4])
      const subTopicPlace = Number(id[8])
      const competencePlace = Number(id[10])

      const subject = this.get_competences()[subjectPlace]
      const topic = subject.topics[topicPlace]
      let subTopic: undefined | ISubTopic = undefined
      let competence!: ICompetence
      if (subTopicPlace > -1) {
        subTopic = topic.subTopics![subTopicPlace]
        competence = subTopic.competences[competencePlace]
      } else competence = topic.competences![competencePlace]

      let treeSubject = tree.find((subj) => subj._id == subject._id)
      if (treeSubject == undefined) {
        treeSubject = {
          _id: subject._id,
          name: subject.name,
          short: subject.short,
          topics: [],
        }
        tree.push(treeSubject)
      }

      let treeTopic = treeSubject.topics.find((top) => top._id == topic._id)
      if (treeTopic == undefined) {
        treeTopic = {
          _id: topic._id,
          name: topic.name,
          short: topic.short,
          subTopics: [],
          competences: [],
        }
        treeSubject.topics.push(treeTopic)
      }

      let treeSubTopic: undefined | ISubTopic = undefined
      if (subTopic) {
        treeSubTopic = treeTopic.subTopics!.find(
          (sub) => sub._id == subTopic!._id
        )
        if (treeSubTopic == undefined) {
          treeSubTopic = {
            _id: subTopic._id,
            name: subTopic.name,
            competences: [],
          }
          treeTopic.subTopics!.push(treeSubTopic)
        }

        treeSubTopic.competences.push(competence)
      } else treeTopic.competences!.push(competence)
    }

    return tree
  }

  get_competences() {
    return competences.concat(this.get_uk())
  }

  get_uk() {
    return uk
  }

  get_subjects(): IRawSubject[] {
    return competences.concat(this.get_uk()).map((subject) => {
      return { _id: subject._id, name: subject.name, short: subject.short }
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
