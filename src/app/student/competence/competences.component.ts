import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import * as d3 from 'd3'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { ISubjectTree } from 'src/app/shared/ui/competence-tree/competence-tree.component'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { CompetencesService } from './competences.service'

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetenceListComponent implements OnInit {
  tree$ = new BehaviorSubject<ISubjectTree | undefined>(undefined)

  constructor(
    private uiService: DialogService,
    private service: CompetencesService
  ) {}

  ngOnInit() {
    this.updateTree()
  }

  private updateTree() {
    this.service
      .getTree()
      .pipe(
        tap(console.info),
        tap((tree) => this.tree$.next(tree)),
        catchError((err) => {
          this.uiService.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
