import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { CompetencesDataService } from 'src/app/shared/data/competences_data/competences-data.service'
import { Name } from 'src/app/core/auth/user'
import { environment } from 'src/app/core/environment/environment.demo'

export interface IUfk {
  _id: number
  student: {
    _id: number
    name: Name
  }
  teacher: {
    _id: number
    name: Name
  }
  competence: {
    _id: string
    name: string
  }
  title: string
  grade: number
  text: string
  date: Date | string
}

@Injectable({
  providedIn: 'root',
})
export class UfkService {
  classControl = new FormControl()
  studentControl = new FormControl()
  teacherControl = new FormControl()
  subjectControl = new FormControl()
  selectedUfks$ = new BehaviorSubject<string[]>([])
  dateControl = new FormControl()
  searchControl = new FormControl()

  ufks$ = new BehaviorSubject<IUfk[] | undefined>(undefined)

  classes$ = new BehaviorSubject<{ _id: number; name: string }[] | undefined>(
    undefined
  )

  constructor(
    private http: HttpClient,
    private ui: DialogService,
    private competencesData: CompetencesDataService
  ) {}

  private getUfks(): Observable<IUfk[]> {
    return this.http.get<IUfk[]>(`${environment.baseUrl}/teacher/ufks`)
  }

  update() {
    this.getUfks()
      .pipe(
        tap((ufks) => {
          ufks.forEach((ufk) => {
            ufk.student.name = Name.Build(ufk.student.name)
            ufk.teacher.name = Name.Build(ufk.teacher.name)
          })
        }),
        tap((ufks) => {
          this.ufks$.next(ufks)
        }),
        catchError((err) => {
          this.ui.showToast('ÜFKs konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
