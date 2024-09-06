import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, Observable, tap, catchError } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { Name } from 'src/app/core/auth/user'
import { IUfk } from '../../ufk/ufk.service'
import { environment } from 'src/app/core/environment/environment.demo'
import { IRef } from 'src/app/shared/utils/interfaces'

// export interface ICoursePerformance {
//   _id: number
//   student: {
//     _id: number
//     name: Name
//   }
//   teacher: {
//     _id: number
//     name: Name
//   }
//   competence: {
//     _id: string
//     name: string
//   }
//   title: string
//   grade: number
//   text: string
//   date: Date | string
// }

@Injectable({
  providedIn: 'root',
})
export class CompetencesService {
  constructor(private http: HttpClient, private ui: DialogService) {}

  private getUfks(): Observable<IUfk[]> {
    return this.http.get<IUfk[]>(`${environment.baseUrl}/ufks`)
  }

  getStudentListFromClass(classId: number) {
    let params = new HttpParams()
    params.set('format', 'ref')
    params.set('class', classId)

    return this.http.get<IRef[]>(`${environment.baseUrl}/students`, { params })
  }

  getCompetenceList(filter?: any) {
    return this.getUfks()
  }
}
