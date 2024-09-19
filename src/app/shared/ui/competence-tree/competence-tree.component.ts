import { Component } from '@angular/core'
import { ISubCompetence } from '../../data/competences_data/competences-data.service'
import { IProgress } from '../../utils/interfaces'
import { IUfk } from 'src/app/teacher/ufk/ufk.service'

export interface ICompetenceTree {
  _id: string
  name: string
  subCompetences: ISubCompetence[]
  progressList: IProgress[]
  ufkList: IUfk[]
  calcProgress: number
  calcGrade: number | undefined
}

export interface ISubTopicTree {
  _id: string
  name: string
  competences: ICompetenceTree[]
  calcProgress: number
  calcGrade: number | undefined
}

export interface ITopicTree {
  _id: string
  name: string
  subTopics?: ISubTopicTree[]
  competences?: ICompetenceTree[]
  calcProgress: number
  calcGrade: number | undefined
}

export interface ISubjectTree {
  _id: string
  name: string
  short: string
  calcProgress: number
  calcGrade: number | undefined
}

@Component({
  selector: 'app-competence-tree',
  templateUrl: './competence-tree.component.html',
  styleUrls: ['./competence-tree.component.css'],
})
export class CompetenceTreeComponent {}
