import { Component } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { tap, BehaviorSubject } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { IUfk } from '../../../ufk/ufk.service'
import { CompetencesService } from '../competences.service'

@Component({
  selector: 'app-competences-table',
  template: '<app-table></app-table>',
})
export class CompetencesTableComponent {
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
    this.service.ufks$
      .pipe(
        filterNullish(),
        tap(console.log),
        tap((ufks) => this.dataSource$.next(new MatTableDataSource(ufks)))
      )
      .subscribe()
  }

  dataSource$ = new BehaviorSubject<MatTableDataSource<IUfk>>(
    new MatTableDataSource([] as IUfk[])
  )

  expandedElement: any | null
}
