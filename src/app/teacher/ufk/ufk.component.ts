import { Component, OnInit } from '@angular/core'
import { UfkService } from './ufk.service'
import { AddUfkService } from './add-ufk/add-ufk.service'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { tap } from 'rxjs'

@Component({
  selector: 'app-ufk',
  templateUrl: './ufk.component.html',
  styleUrls: ['./ufk.component.css'],
})
export class UfkComponent implements OnInit {
  constructor(
    protected service: UfkService,
    private addUfkService: AddUfkService
  ) {}

  ngOnInit(): void {
    this.service.update()
  }

  addUfk() {
    this.addUfkService
      .addUfk()
      .pipe(
        filterNullish(),
        tap(() => this.service.update())
      )
      .subscribe()
  }
}
