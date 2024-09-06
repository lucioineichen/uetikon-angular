import { Component, Input } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { tap, BehaviorSubject } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { IUfk } from '../../../ufk/ufk.service'
import { CompetencesService } from '../competences.service'

@Component({
  selector: 'app-competences-table [competenceList]',
  template: '<app-table></app-table>',
})
export class CompetencesTableComponent {
  // @Input() competenceList!: ICoursePerformance[]
  displayedColumns: string[] = [
    'student',
    'teacher',
    'subject',
    'grade',
    'eval',
    'date',
  ]

  constructor(protected service: CompetencesService) {}

  ngOnInit(): void {
    // this.dataSource$.next(new MatTableDataSource(this.competenceList))
  }

  // dataSource$ = new BehaviorSubject<MatTableDataSource<ICoursePerformance>>(
  //   new MatTableDataSource([] as IUfk[])
  // )

  expandedElement: any | null
}
