import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import * as d3 from 'd3'
import { BehaviorSubject, catchError, mergeMap, tap } from 'rxjs'
import { ISubjectTree } from 'src/app/shared/ui/competence-tree/competence-tree.component'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { CompetencesService } from './competences.service'
import { IUfk } from 'src/app/teacher/ufk/ufk.service'
import { WriteReflectionService } from './ui/write-reflection/write-reflection.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { ICompetence, IFile, IRef } from 'src/app/shared/utils/interfaces'
import { IRawSubject } from 'src/app/shared/data/competences_data/competences-data.service'

export interface IReflection {
  _id: number
  competence: ICompetence
  title: string
  grade: number
  text: string
  date: Date | string
  course?: IRef
  subject?: IRawSubject
  file: IFile
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetenceListComponent implements OnInit {
  ufks$ = new BehaviorSubject<IUfk[] | undefined>(undefined)
  reflections$ = new BehaviorSubject<IReflection[] | undefined>(undefined)
  tree$ = new BehaviorSubject<ISubjectTree | undefined>(undefined)

  constructor(
    private ui: DialogService,
    private service: CompetencesService,
    private writeReflectionService: WriteReflectionService
  ) {}

  ngOnInit() {
    this.updateTree()
    this.updateUfks()
    this.updateReflections()
  }

  writeReflection() {
    this.writeReflectionService
      .writeReflection()
      .pipe(
        filterNullish(),
        mergeMap((data) => this.service.postReflection(data)),
        tap(() => this.updateUfks()),
        catchError((err) => {
          this.ui.showToast('Reflexion konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  private updateReflections() {
    this.service
      .getReflections()
      .pipe(
        tap((reflections) => this.reflections$.next(reflections)),
        catchError((err) => {
          this.ui.showToast('Reflexionen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private updateUfks() {
    this.service
      .getUfks()
      .pipe(
        tap((ufks) => this.ufks$.next(ufks)),
        catchError((err) => {
          this.ui.showToast('UFKs konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  private updateTree() {
    this.service
      .getTree()
      .pipe(
        tap(console.info),
        tap((tree) => this.tree$.next(tree)),
        catchError((err) => {
          this.ui.showToast('Kompetenzen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
