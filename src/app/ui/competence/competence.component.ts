import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, Input } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'
import { ICompetence } from 'src/app/competences_data/competences.data'

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
  selector: 'app-competence [competences]',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css'],
})
export class CompetenceComponent {
  @Input() competences!: ICompetence[]

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

  ngOnInit(): void {
    this.dataSource.data = this.competences.map(this.map_competence)
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable
}
