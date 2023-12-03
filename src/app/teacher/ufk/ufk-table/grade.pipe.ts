import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'grade',
})
export class GradePipe implements PipeTransform {
  transform(grade: number): unknown {
    if (grade < 0.6) return 'Schlecht'
    if (grade > 0.6) return 'Gut'
    return 'Genügend'
  }
}
