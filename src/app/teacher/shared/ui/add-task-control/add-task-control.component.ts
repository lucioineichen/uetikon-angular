import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { AddTaskService } from '../add-task/add-task.service'
import { tap } from 'rxjs'
import { ITask } from 'src/app/shared/utils/interfaces'
import { filterNullish } from 'src/app/shared/utils/filternullish'

@Component({
  selector: 'app-add-task-control [control]',
  template: `
    <a mat-button color="primary" (click)="addTask()">
      <mat-icon>add</mat-icon> Aufgaben
    </a>
    <div *ngIf="control.value.length > 0" class="mat-typographie">
      <p>Ausgewählt:</p>
      <mat-chip *ngFor="let task of control.value; index as i">
        {{ task.title }}
        <button matChipRemove [attr.aria-label]="'remove '">
          <mat-icon>cancel</mat-icon>
        </button>
      </mat-chip>
    </div>
  `,
  styleUrls: [],
})
export class AddTaskControlComponent implements OnInit {
  @Input() control!: FormControl

  constructor(private service: AddTaskService) {}

  ngOnInit(): void {
    this.control.setValue([])
  }

  addTask() {
    this.service
      .addTask()
      .pipe(
        filterNullish(),
        tap((data) => this.control.value.push(data))
      )
      .subscribe()
  }

  removeTask(i: number) {
    this.control.value.splice(i, 1)
  }
}
