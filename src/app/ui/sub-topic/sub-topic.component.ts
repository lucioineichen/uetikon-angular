import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, Input } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'
import {
  ICompetence,
  ISubTopic,
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
  selector: 'app-sub-topic [subTopics]',
  templateUrl: './sub-topic.component.html',
  styleUrls: ['./sub-topic.component.css'],
})
export class SubTopicComponent {
  @Input() subTopics!: ISubTopic[]

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

  private readonly map_sub_competence = (subCompetence: any) => {
    return {
      _id: subCompetence._id,
      name: subCompetence.name,
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

  ngOnInit(): void {
    this.dataSource.data = this.subTopics.map(this.map_sub_topic)
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable
}
