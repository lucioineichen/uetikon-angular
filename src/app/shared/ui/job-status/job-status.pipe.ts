import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'jobStatus',
})
export class JobStatusPipe implements PipeTransform {
  transform(status: number): string {
    if (status == 1) return 'Nicht Begonnen'
    if (status == 2) return 'In Bearbeitung'
    return 'Fertig'
  }
}
