import { Injectable } from '@angular/core'
import { UfkService } from '../ufk.service'

@Injectable({
  providedIn: 'root',
})
export class UfkControlService {
  constructor(private service: UfkService) {}
}
