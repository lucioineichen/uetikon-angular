import { Component, Inject } from '@angular/core'
import { UfkService } from './ufk.service'

@Component({
  selector: 'app-ufk',
  templateUrl: './ufk.component.html',
  styleUrls: ['./ufk.component.css'],
})
export class SelectUfkComponent {
  constructor(protected service: UfkService) {}
}
