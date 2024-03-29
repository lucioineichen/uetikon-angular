import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, Observable, tap, catchError } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { Name } from 'src/app/core/auth/user'
import { IUfk } from '../../ufk/ufk.service'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
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

  constructor(private http: HttpClient, private ui: DialogService) {}

  private getUfks(): Observable<IUfk[]> {
    return this.http.get<IUfk[]>(`${environment.baseUrl}/ufks`)
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
