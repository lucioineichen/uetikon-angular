import { Component, Input, OnInit } from '@angular/core'
import { ClassControlService } from './class-control.service'
import { FormControl } from '@angular/forms'
import { IRef } from 'src/app/shared/utils/interfaces'
import { BehaviorSubject, catchError, tap } from 'rxjs'
import { DialogService } from 'src/app/shared/ui/dialogs/ui.service'

@Component({
  selector: 'app-class-control [control]',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Klasse</mat-label>
      <mat-select [formControl]="control">
        <mat-option *ngFor="let class of classList$ | async" [value]="class._id"
          >{{ class.name }}
        </mat-option>
        <mat-option *ngIf="!(classList$ | async)">Lädt Klassen...</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class ClassControlComponent implements OnInit {
  @Input() control!: FormControl<number>
  classList$ = new BehaviorSubject<IRef[] | undefined>(undefined)

  constructor(
    protected service: ClassControlService,
    private ui: DialogService
  ) {}

  ngOnInit(): void {
    this.update()
  }

  update() {
    this.service
      .getClasses()
      .pipe(
        tap((data) => {
          this.classList$.next(data.classes)
        }),
        catchError((err) => {
          this.ui.showToast('Klassen konnten nicht geladen werden')
          return err
        })
      )
      .subscribe()
  }
}
