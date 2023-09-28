import { CollectionViewer, SelectionChange } from '@angular/cdk/collections'
import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, Input } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree'
import { BehaviorSubject, Observable, map, merge } from 'rxjs'
import { ICompetence } from 'src/app/administrator/competences/competences.service'

interface CompetenceNode {
  _id: number
  name: string
  children?: CompetenceNode[]
}

class DynamicFlatNode {
  constructor(
    public expandable: boolean,
    public name: string,
    public level: number
  ) {}
}

@Component({
  selector: 'app-async-competences',
  templateUrl: './async-competences.component.html',
  styleUrls: ['./async-competences.component.css'],
})
export class AsyncCompetencesComponent {
  // @Input() competences$!: BehaviorSubject<ICompetence[]>
  // data$ = new BehaviorSubject<DynamicFlatNode[]>([])
  // get data(): DynamicFlatNode[] {
  //   return this.data$.value
  // }
  // set data(value: DynamicFlatNode[]) {
  //   this._treeControl.dataNodes = value
  //   this.data$.next(value)
  // }
  // constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>) {}
  // connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
  //   this._treeControl.expansionModel.changed.subscribe((change) => {
  //     if (
  //       (change as SelectionChange<DynamicFlatNode>).added ||
  //       (change as SelectionChange<DynamicFlatNode>).removed
  //     ) {
  //       this.handleTreeControl(change as SelectionChange<DynamicFlatNode>)
  //     }
  //   })
  //   return merge(collectionViewer.viewChange, this.data$).pipe(
  //     map(() => this.data)
  //   )
  // }
  // disconnect(collectionViewer: CollectionViewer): void {}
  // handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
  //   // if (change.added) {
  //   //   change.added.forEach(node => this.toggleNode(node, true));
  //   // }
  //   // if (change.removed) {
  //   //   change.removed
  //   //     .slice()
  //   //     .reverse()
  //   //     .forEach(node => this.toggleNode(node, false));
  //   // }
  // }
  // private _transformer = (node: CompetenceNode, level: number) => {
  //   return {
  //     expandable: !!node.children && node.children.length > 0,
  //     name: node.name,
  //     level: level,
  //   }
  // }
  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //   (node) => node.level,
  //   (node) => node.expandable
  // )
  // treeFlattener = new MatTreeFlattener(
  //   this._transformer,
  //   (node) => node.level,
  //   (node) => node.expandable,
  //   (node) => node.children
  // )
  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)
  // private readonly map_sub_competence = (subCompetence: string) => {
  //   return {
  //     _id: 0,
  //     name: subCompetence,
  //   }
  // }
  // private readonly map_competence = (competence: ICompetence) => {
  //   return {
  //     _id: competence._id,
  //     name: competence.name,
  //     children: competence.subCompetences.map(this.map_sub_competence),
  //   }
  // }
  // ngOnInit(): void {
  //   this.dataSource.data = this.competences$.pipe(
  //     map((competences) => competences.map(this.map_competence))
  //   )
  // }
  // hasChild = (_: number, node: ExampleFlatNode) => node.expandable
}
