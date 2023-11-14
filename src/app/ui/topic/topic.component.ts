import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, Input, OnInit } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'
import {
  ICompetence,
  ISubTopic,
  ITopic,
} from 'src/app/competences_data/competences.data'

interface CompetenceNode {
  _id: string
  name: string
  children?: CompetenceNode[]
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean
  name: string
  level: number
}

@Component({
  selector: 'app-topic [topics]',
  templateUrl: './topic.component.html',
  styles: [],
})
export class TopicComponent implements OnInit {
  @Input() topics!: ITopic[]

  private _transformer = (node: CompetenceNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)

  private readonly map_sub_competence = (subCompetence: string) => {
    return {
      _id: '0',
      name: subCompetence,
    }
  }

  private readonly map_competence = (competence: ICompetence) => {
    return {
      _id: competence._id,
      name: competence.name,
      children: competence.subCompetences.map(this.map_sub_competence),
    }
  }

  private readonly map_sub_topic = (subTopic: ISubTopic) => {
    return {
      _id: subTopic._id,
      name: subTopic.name,
      children: subTopic.competences.map(this.map_competence),
    }
  }

  private readonly map_topic: (topic: ITopic) => CompetenceNode = (
    topic: ITopic
  ) => {
    const competences: CompetenceNode[] | undefined = topic.competences?.map(
      this.map_competence
    )
    const _topic: CompetenceNode = {
      _id: topic._id,
      name: topic.name,
      children: competences || topic.subTopics?.map(this.map_sub_topic),
    }

    return _topic
  }

  ngOnInit(): void {
    this.dataSource.data = this.topics.map(this.map_topic)
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable
}
