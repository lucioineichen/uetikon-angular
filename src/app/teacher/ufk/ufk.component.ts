import { Component, OnInit } from '@angular/core'
import { IUfk, UfkService } from './ufk.service'
import { AddUfkService } from './ui/add-ufk/add-ufk.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  mergeMap,
  startWith,
  tap,
} from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { SelectStudentService } from 'src/app/shared/ui/select-student/select-student.service'
import { ConfirmDeleteService } from 'src/app/shared/ui/confirm-delete/confirm-delete.service'
import { IReflection } from 'src/app/student/competence/competences.component'

@Component({
  selector: 'app-ufk',
  templateUrl: './ufk.component.html',
  styleUrls: ['./ufk.component.css'],
})
export class UfkComponent implements OnInit {
  filterForm!: FormGroup
  ufks$ = new BehaviorSubject<IUfk[] | undefined>(undefined)
  reflections$ = new BehaviorSubject<IReflection[]>([])
  studentControl = new FormControl<number | null>(null)
  courseControl = new FormControl<number | null>(null)
  subjectControl = new FormControl<number | null>(null)
  ufkControl = new FormControl<string | null>(null)
  search = new FormControl('')

  constructor(
    private service: UfkService,
    private addUfkService: AddUfkService,
    private ui: DialogService,
    private fb: FormBuilder,
    protected selectStudentService: SelectStudentService,
    private confirmDelete: ConfirmDeleteService
  ) {}

  ngOnInit(): void {
    this.buildForm()
    this.updateUfks()
    this.sincFilteredUfks()
    this.syncReflections()
  }

  private syncReflections() {
    this.studentControl.valueChanges
      .pipe(
        filterNullish(),
        mergeMap((id) => this.service.getReflections(id)),
        tap((reflections) => this.reflections$.next(reflections)),
        catchError((err) => {
          this.ui.showToast('Reflexionen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }

  addUfk() {
    this.addUfkService
      .addUfk()
      .pipe(
        filterNullish(),
        mergeMap((data) => this.service.postUfk(data)),
        tap(() => this.updateUfks()),
        catchError((err) => {
          this.ui.showToast('ÜFK konnte nicht erstellt werden')
          return err
        })
      )
      .subscribe()
  }

  deleteUfk(ufk: IUfk) {
    this.confirmDelete
      .confirmDelete(ufk.title)
      .pipe(
        map((isConfirm) => {
          if (!isConfirm) return undefined
          return true
        }),
        filterNullish(),
        mergeMap(() => this.service.deleteUfk(ufk._id)),
        tap(() => this.updateUfks()),
        catchError((err) => {
          this.ui.showToast('ÜFK konnte nicht gelöscht werden')
          return err
        })
      )
      .subscribe()
  }

  private sincFilteredUfks() {
    combineLatest([
      combineLatest([
        this.studentControl.valueChanges.pipe(
          startWith(null),
          distinctUntilChanged()
        ),
        this.courseControl.valueChanges.pipe(
          startWith(null),
          distinctUntilChanged()
        ),
        this.subjectControl.valueChanges.pipe(
          startWith(null),
          distinctUntilChanged()
        ),
        this.ufkControl.valueChanges.pipe(
          startWith(null),
          distinctUntilChanged()
        ),
      ]).pipe(
        mergeMap(([student, course, subject, ufk]) =>
          this.service.getFilteredUfks(
            student || undefined,
            course || undefined,
            subject || undefined,
            ufk || undefined
          )
        )
      ),
      this.search.valueChanges.pipe(startWith(''), distinctUntilChanged()),
    ])
      .pipe(
        map(([ufks, search]) => {
          if (!search || search == '') return ufks
          return this.filterUfks(ufks, search)
        }),
        tap((ufks) => this.ufks$.next(ufks))
      )
      .subscribe()
  }

  private filterUfks(ufks: IUfk[], search: string) {
    return ufks.filter((ufk) =>
      ufk.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  private buildForm() {
    this.filterForm = this.fb.group({
      student: [null],
    })
  }

  private updateUfks() {
    this.service
      .getFilteredUfks(
        this.studentControl.value || undefined,
        this.courseControl.value || undefined,
        this.subjectControl.value || undefined,
        this.ufkControl.value || undefined
      )
      .pipe(
        map((ufks) => this.filterUfks(ufks, this.search.value || '')),
        tap((ufks) => {
          this.ufks$.next(ufks)
        }),
        tap(console.info),
        catchError((err) => {
          this.ui.showToast('ÜFKs konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
