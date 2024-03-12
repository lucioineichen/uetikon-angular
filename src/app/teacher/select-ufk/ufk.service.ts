import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { SelectUfkComponent } from './ufk.component'
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import {
  ICompetence,
  ISubCompetence,
  ISubject,
} from 'src/app/shared/data/competences_data/competences.data'
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { SelectStudentsService } from 'src/app/shared/ui/select-students/select-students.service'
import { IStudent } from 'src/app/shared/utils/interfaces'
import { HttpClient } from '@angular/common/http'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { SelectCompetencesService } from 'src/app/shared/ui/select-competences/select-competences.service'

@Injectable({
  providedIn: 'root',
})
export class UfkService {
  students$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  subCompetences$ = new BehaviorSubject<ISubCompetence[] | undefined>(undefined)

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private selectComps: SelectCompetencesService,
    private selectStuds: SelectStudentsService,
    private ui: DialogService
  ) {}

  getData() {
    return {
      students: this.students$.value,
      competences: this.subCompetences$.value,
    }
  }

  putCompetences(data: any) {
    return this.http.put<any>(
      `${environment.baseUrl}/teacher/students/competences`,
      data
    )
  }

  confirm() {
    const dialogRef = this.dialog.open(SelectUfkComponent)

    dialogRef
      .afterClosed()
      .pipe(
        filterNullish(),
        mergeMap((data: any) => this.putCompetences(data)),
        tap(() =>
          this.ui.showToast('Kompetenzen wurden erfolgreich hinzugefügt')
        ),
        catchError((err) => {
          this.ui.showToast('Kompetenzen konnten nicht hinzugefügt werden')
          return err
        })
      )
      .subscribe()
  }

  addUfk() {
    this.selectComps
      .selectCompetences([], 'uk')
      .pipe(
        filterNullish(),
        tap((data) => this.subCompetences$.next(data.subCompetences)),
        mergeMap(() => this.selectStuds.selectStudents()),
        filterNullish(),
        tap((studs) => this.students$.next(studs)),
        tap(() => this.confirm())
      )
      .subscribe()
  }

  chooseCompetences() {
    this.selectComps
      .selectCompetences(this.subCompetences$.value?.map((comp) => comp._id))
      .pipe(
        filterNullish(),
        tap((data) => this.subCompetences$.next(data.subCompetences))
      )
      .subscribe()
  }

  chooseStudents() {
    this.selectStuds
      .selectStudents(this.students$.value?.map((stud) => stud._id))
      .pipe(
        tap(console.log),
        filterNullish(),
        tap((studs) => this.students$.next(studs))
      )
      .subscribe()
  }
}
