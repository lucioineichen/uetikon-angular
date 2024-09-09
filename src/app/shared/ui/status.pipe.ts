import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Nicht Begonnen'
      case 1:
        return 'Am Bearbeiten'
      case 2:
        return 'Fertig'
      default:
        throw Error('Invalid Status')
    }
  }
}
