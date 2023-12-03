import { Component, OnInit } from '@angular/core'
import { AddUfkService } from './add-ufk.service'
import { IStudent } from 'src/app/interfaces'

@Component({
  selector: 'app-add-ufk',
  templateUrl: './add-ufk.component.html',
  styleUrls: ['./add-ufk.component.css'],
})
export class AddUfkComponent {
  constructor(protected service: AddUfkService) {}
}
