import { Component } from '@angular/core'

@Component({
  selector: 'app-loading-ufk-table',
  template: `
    <div class="table mat-elevation-z8">
      <div class="row under-line">
        <div class="header-row">
          <div
            class="header-element"
            *ngFor="let header of headers"
            [ngStyle]="{ width: header.width + '%' }"
          >
            {{ header.name | titlecase }}
          </div>
        </div>
      </div>

      <!-- <div class="row">
        <div class="sub-row">
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </div>
      </div>
      <div class="row">
        <div class="sub-row">
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </div>
      </div> -->

      <div class="row">
        <div class="sub-row">
          <!-- grade -->
          <div class="col" [ngStyle]="{ width: this.headers[0].width + '%' }">
            <!-- <mat-spinner [diameter]="40"></mat-spinner> -->
          </div>
          <!-- student -->
          <div class="col" [ngStyle]="{ width: this.headers[1].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <!-- teacher -->
          <div class="col" [ngStyle]="{ width: this.headers[2].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <!-- title -->
          <div class="col" [ngStyle]="{ width: this.headers[3].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <!-- competence -->
          <div class="col" [ngStyle]="{ width: this.headers[4].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>

          <!-- course -->
          <div class="col" [ngStyle]="{ width: this.headers[5].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <!-- subject -->
          <div class="col" [ngStyle]="{ width: this.headers[6].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <!-- date -->
          <div class="col" [ngStyle]="{ width: this.headers[7].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <!-- expand -->
          <div class="col" [ngStyle]="{ width: this.headers[8].width + '%' }">
            <!-- <mat-spinner [diameter]="40"></mat-spinner> -->
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="sub-row">
          <div class="col" [ngStyle]="{ width: this.headers[0].width + '%' }">
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[1].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[2].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[3].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[4].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[5].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[6].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[7].width + '%' }">
            <mat-spinner [diameter]="40"></mat-spinner>
          </div>
          <div class="col" [ngStyle]="{ width: this.headers[8].width + '%' }">
          </div>
        </div>
      </div> -->
    </div>
  `,
  styles: [
    `
      .col {
        position: relative;
        font-size: 14px;
        display: flex;
        align-items: center;
        height: 48px;
      }
      .under-line {
        overflow: hidden;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      }

      .header-element {
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
      }

      .row {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        height: 48px;
      }

      .sub-row {
        padding-left: 20px;
        display: flex;
        align-items: center;
      }

      .header-row {
        padding-left: 20px;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    `,
  ],
})
export class LoadingUfkTableComponent {
  readonly headers = [
    { name: '', width: 5 },
    { name: 'Schüler', width: 13 },
    { name: 'Lehrer', width: 13 },
    { name: 'Titel', width: 13 },
    { name: 'Kompetenz', width: 21 },
    { name: 'Kurs', width: 10 },
    { name: 'Fach', width: 10 },
    { name: 'Datum', width: 10 },
    { name: '', width: 5 },
  ]
}
