import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { SelectStudentsService } from 'src/app/shared/ui/select-students/select-students.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IStudent, Student } from 'src/app/shared/utils/interfaces'
import { AddUfkService } from '../add-ufk.service'
import { FormControl } from '@angular/forms'
import { environment } from 'src/app/core/environment/environment.demo'

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  favs$ = new BehaviorSubject<IStudent[] | undefined>(undefined)
  control: FormControl

  constructor(
    private selectStuds: SelectStudentsService,
    private ui: DialogService,
    private http: HttpClient,
    private service: AddUfkService
  ) {
    this.control = this.service.form.get('student') as FormControl
  }

  initFav() {
    // this.favControl.valueChanges
    //   .pipe(
    //     filterNullish(() => this.student$.next(undefined)),
    //     tap((id) => {
    //       let stud = this.favs$.value?.find((fav) => fav._id === id)
    //       if (stud) this.student$.next(stud)
    //     }),
    //     catchError((err) => {
    //       this.ui.showToast('Favorite nicht korrekt')
    //       return err
    //     })
    //   )
    //   .subscribe()
  }

  updateFavs() {
    this.getFavs()
      .pipe(
        map((favs) => favs.map(Student.Build)),
        tap((favs) => this.favs$.next(favs)),
        catchError((err) => {
          this.ui.showToast('Favorit Schüler konnten nicht geladen werden')
          this.favs$.error('server')
          return err
        })
      )
      .subscribe()
  }

  searchStudent() {
    this.selectStuds
      .selectStudents(this.control.value ? [this.control.value] : undefined)
      .pipe(
        filterNullish(),
        map((studs) => studs[0]._id),
        tap((id) => this.control.setValue(id)),
        // tap((stud) => this.student$.next(stud)),
        // filterNullish(() => this.favControl.setValue(undefined)),
        // tap((stud) => {
        //   this.favControl.setValue(stud._id)
        // }),
        catchError((err) => {
          this.ui.showToast('Schüler konnte nicht ausgewählt werden')
          return err
        })
      )
      .subscribe()
  }

  private getFavs() {
    return this.http.get<IStudent[]>(
      `${environment.baseUrl}/teacher/students/favorites`
    )
  }
}
