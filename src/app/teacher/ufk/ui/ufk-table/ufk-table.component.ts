import { Component, OnInit } from '@angular/core'
import { IUfk, UfkService } from '../../ufk.service'
import { MatTableDataSource } from '@angular/material/table'
import { BehaviorSubject, tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-ufk-table',
  templateUrl: './ufk-table.component.html',
  styleUrls: ['./ufk-table.component.css'],
})
export class UfkTableComponent implements OnInit {
  displayedColumns: string[] = [
    'student',
    'teacher',
    'title',
    'competence',
    'grade',
    'subject',
    'date',
  ]

  constructor(protected service: UfkService) {}

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
