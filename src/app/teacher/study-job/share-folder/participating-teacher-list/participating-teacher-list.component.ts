import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IRef } from 'src/app/shared/utils/interfaces'

@Component({
  selector: 'app-participating-teacher-list',
  template: `
    <mat-accordion>
      <mat-expansion-panel [expanded]="true" hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>
            <mat-icon class="text-icon">group</mat-icon> Mitwirkende Personen
          </mat-panel-title>
        </mat-expansion-panel-header>
        <button mat-button (click)="addEvent.emit(true)">
          <mat-icon>add</mat-icon> Mitwirkende Person Hinzufügen
        </button>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title
            ><mat-icon class="text-icon">edit</mat-icon> Schreib Recht ({{
              teacherWriteList.length
            }})
          </mat-panel-title>
        </mat-expansion-panel-header>
        <mat-list>
          <mat-list-item
            *ngFor="let teach of teacherWriteList"
            class="teacher-item"
            >{{ teach.name }}
            <span class="more-icon-wrapper">
              <button
                class="more-icon"
                mat-icon-button
                [matMenuTriggerFor]="menu"
              >
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #menu="matMenu" xPosition="before">
                <button
                  mat-menu-item
                  (click)="
                    removeEvent.emit({ isWrite: true, teacherId: teach._id })
                  "
                >
                  Entfernen
                </button>
                <button
                  mat-menu-item
                  (click)="
                    changeEvent.emit({ isWrite: true, teacherId: teach._id })
                  "
                >
                  Recht Ändern
                </button>
              </mat-menu>
            </span>
          </mat-list-item>
        </mat-list>
        <div *ngIf="teacherWriteList.length == 0">
          Keine Personen mit Schreib Recht
        </div>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            <mat-icon class="text-icon">visibility</mat-icon> Lese Recht ({{
              teacherReadList.length
            }})
          </mat-panel-title>
        </mat-expansion-panel-header>
        <mat-list>
          <mat-list-item *ngFor="let teach of teacherReadList"
            >{{ teach.name }}
            <button class="more-icon" mat-icon-button>
              <mat-icon>more_vert</mat-icon>
            </button></mat-list-item
          >
        </mat-list>
        <div *ngIf="teacherReadList.length == 0">
          Keine Personen mit Lese Recht
        </div>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [
    `
      .text-icon {
        vertical-align: 'bottom';
        margin-right: 10px;
      }
    `,
    `
      .teacher-item {
        overflow: visible;
      }
    `,
    `
      .more-icon {
        transform: translateY(-25%);
      }
    `,
    `
      .more-icon-wrapper {
        position: absolute;
        right: 0;
      }
    `,
  ],
})
export class ParticipatingTeacherListComponent implements OnInit {
  @Input('teacher-write-list') teacherWriteList!: IRef[]
  @Input('teacher-read-list') teacherReadList!: IRef[]
  @Output('remove') removeEvent = new EventEmitter<{
    isWrite: boolean
    teacherId: number
  }>()
  @Output('change-permission') changeEvent = new EventEmitter<{
    isWrite: boolean
    teacherId: number
  }>()
  @Output('add') addEvent = new EventEmitter<true>()

  ngOnInit(): void {}
}
