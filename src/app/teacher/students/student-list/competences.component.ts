import { Component } from '@angular/core'
import { tap } from 'rxjs'
import { filterNullish } from 'src/app/shared/utils/filternullish'
import { AddUfkService } from '../../ufk/ui/add-ufk/add-ufk.service'
import { CompetencesService } from './competences.service'

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class StudentListComponent {
  constructor(
    protected service: CompetencesService,
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
