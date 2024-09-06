import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SelectCourseService } from './select-course.service'
import { BehaviorSubject, catchError, map, tap } from 'rxjs'
import { IRef } from '../../utils/interfaces'
import { SubSink } from 'subsink'
import { FormControl, Validators } from '@angular/forms'
import { DialogService } from '../dialogs/ui.service'
import { filterNullish } from '../../utils/filternullish'

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css'],
})
export class SelectCourseComponent {
  courseControl = new FormControl<number | null>(null, Validators.required)
  readonly sink = new SubSink()

  readonly courseList$ = new BehaviorSubject<IRef[]>([])

  constructor(
    private service: SelectCourseService,
    @Inject(MAT_DIALOG_DATA)
    private data: { student?: number; course?: number },
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.initCourses()
    this.courseControl.setValue(this.data.course || null)
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe()
  }

  getCourse(id: number | null) {
    return this.courseList$.value.find((course) => course._id == id)
  }

  private initCourses() {
    const sub = this.service
      .getCourseList(this.data.student)
      .pipe(
        tap((list) => this.courseList$.next(list)),
        catchError((err) => {
          this.ui.showToast('Kurse konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
    this.sink.add(sub)
  }
}
