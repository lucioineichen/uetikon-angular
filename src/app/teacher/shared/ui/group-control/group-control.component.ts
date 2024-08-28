import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { IRef } from 'src/app/shared/utils/interfaces'
import { GroupControlService } from './group-control.service'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-group-control [control]',
  template: ` <mat-form-field appearance="outline">
    <mat-label>Klasse</mat-label>
    <mat-select [formControl]="control">
      <mat-option [value]="''">Alle</mat-option>
      <mat-option
        *ngFor="let group of groupList$ | async"
        [value]="'g' + group._id"
        >{{ group.name }}
      </mat-option>
      <mat-option
        *ngFor="let class of classList$ | async"
        [value]="'c' + class._id"
        >{{ class.name }}
      </mat-option>
      <mat-option *ngIf="!(groupList$ | async)">Lädt Gruppen...</mat-option>
      <mat-option *ngIf="!(classList$ | async)">Lädt Klassen...</mat-option>
    </mat-select>
  </mat-form-field>`,
  styles: [],
})
export class GroupControlComponent {
  @Input() control!: FormControl<number>
  groupList$ = new BehaviorSubject<IRef[] | undefined>(undefined)
  classList$ = new BehaviorSubject<IRef[] | undefined>(undefined)

  constructor(
    protected service: GroupControlService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.update()
  }

  update() {
    this.service
      .getGroupList()
      .pipe(
        tap((groups) => {
          this.groupList$.next(groups)
        }),
        catchError((err) => {
          this.ui.showToast('Gruppen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()

    this.service
      .getClassList()
      .pipe(
        tap((list) => {
          this.classList$.next(list)
        }),
        catchError((err) => {
          this.ui.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
