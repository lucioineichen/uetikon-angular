import { Injectable } from '@angular/core'
import { UfkService } from '../ufk.service'

@Injectable({
  providedIn: 'root',
})
export class TeacherControlService {
  constructor(private service: UfkService) {}
}
