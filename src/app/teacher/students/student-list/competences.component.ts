import { Component } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  mergeMap,
  tap,
} from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { AddUfkService } from '../../ufk/ui/add-ufk/add-ufk.service'
import { CompetencesService } from './competences.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { IRef } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class StudentListComponent {
  filterControl!: FormGroup
  studentListFromClass!: Observable<IRef[]>

  // coursePerformanceList$ = new BehaviorSubject<
  //   ICoursePerformance[] | undefined
  // >(undefined)

  constructor(
    protected service: CompetencesService,
    private addUfkService: AddUfkService,
    private fb: FormBuilder,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.buildForm()
    this.update()
    this.studentListFromClass = this.groupControl.valueChanges.pipe(
      mergeMap((id: number) => this.service.getStudentListFromClass(id))
    )
  }

  addUfk() {
    this.addUfkService
      .addUfk()
      .pipe(
        filterNullish(),
        tap(() => this.update())
      )
      .subscribe()
  }

  private buildForm() {
    this.filterControl = this.fb.group({
      search: [''],
      group: [''],
      course: [''],
      teacher: [],
      competenceList: [[]],
      date: [],
      subject: [],
      studyJob: [],
      status: [],
      niveau: [],
      grade: [],
      credits: [],
    })
  }

  private update() {
    this.service.getCompetenceList(this.filterControl.value).pipe(
      tap((comps) => {
        // this.coursePerformanceList$.next(comps)
      }),
      catchError((err) => {
        this.ui.showToast('ÜFKs konnten nicht geladen werden')
        return err
      })
    )
  }

  protected get searchControl() {
    return this.filterControl.get('search') as FormControl<any>
  }

  protected get dateControl() {
    return this.filterControl.get('date') as FormControl<any>
  }

  protected get subjectControl() {
    return this.filterControl.get('subject') as FormControl<any>
  }

  protected get groupControl() {
    return this.filterControl.get('group') as FormControl<any>
  }

  protected get courseControl() {
    return this.filterControl.get('course') as FormControl<any>
  }

  protected get teacherControl() {
    return this.filterControl.get('teacher') as FormControl<any>
  }

  protected get competenceControl() {
    return this.filterControl.get('competenceList') as FormControl<any>
  }

  protected get jobControl() {
    return this.filterControl.get('job') as FormControl<any>
  }
}
