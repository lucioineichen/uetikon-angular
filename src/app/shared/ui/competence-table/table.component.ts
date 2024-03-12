import { PercentPipe } from '@angular/common'
import { Component } from '@angular/core'
import { BehaviorSubject, delay, delayWhen, interval, map, of } from 'rxjs'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: 0,
          overflow: 'hidden',
          marginBottom: 0,
          display: 'none',
        })
      ),
      state('expanded', style({ overflow: 'hidden' })),

      transition('collapsed => expanded', [
        style({}),
        animate('300ms ease-out'),
      ]),
      transition('expanded => collapsed', [animate('300ms ease-out')]),
    ]),
  ],
})
export class TableComponent {
  readonly index$ = new BehaviorSubject<number>(-1)

  dataFromKey(data: any, key: string) {
    return data[key]
  }

  get width() {
    return `${100 / this.headers.length}%`
  }

  toggleIndex(i: number) {
    if (this.index$.value == i) this.index$.next(-1)
    else this.index$.next(i)
  }

  readonly headers: { key: string; name: string; style?: string }[] = [
    { key: 'student', name: 'Schüler' },
    { key: 'subject', name: 'Fach' },
    { key: 'grade', name: 'Note', style: 'percent' },
    { key: 'teacher', name: 'Lehrer' },
    // { key: 'date', name: 'Datum', style: 'date' },
  ]

  readonly DUMMY_DATA = [
    {
      student: 'L. Mara',
      teacher: 'H. Wolowitz',
      subject: 'Mathematik',
      grade: 0.92,
      eval: 'Final Exam',
      date: '2023-05-15',
    },
    {
      student: 'P. Lukas',
      teacher: 'S. Cooper',
      subject: 'Natur und Technik',
      grade: 0.63,
      eval: 'Midterm Exam',
      date: '2023-04-10',
    },
    {
      student: 'P. Lukas',
      teacher: 'R. Koothrapali',
      subject: 'Geschichte',
      grade: 0.8,
      eval: 'Project',
      date: '2023-03-22',
    },
    {
      student: 'U. Martin',
      teacher: 'S. Cooper',
      subject: 'Natur und Technik',
      grade: 1,
      eval: 'Lab Report',
      date: '2023-06-02',
    },
    {
      student: 'L. Mara',
      teacher: 'L. Hofstatter',
      subject: 'Deutsch',
      grade: 0.87,
      eval: 'Essay',
      date: '2023-05-05',
    },
    {
      student: 'U. Martin',
      teacher: 'H. Wolowitz',
      subject: 'Informatik',
      grade: 0.92,
      eval: 'Coding Assignment',
      date: '2023-04-18',
    },
    {
      student: 'P. Lukas',
      teacher: 'S. Cooper',
      subject: 'Musik',
      grade: 0.92,
      eval: 'Performance',
      date: '2023-03-10',
    },
    {
      student: 'R. Tom',
      teacher: 'R. Koothrapali',
      subject: 'Geographie',
      grade: 0.85,
      eval: 'Presentation',
      date: '2023-02-25',
    },
    {
      student: 'R. Tom',
      teacher: 'L. Hofstatter',
      subject: 'Sport',
      grade: 0.72,
      eval: 'Fitness Test',
      date: '2023-01-15',
    },
    {
      student: 'P. Lukas',
      teacher: 'H. Wolowitz',
      subject: 'TTG',
      grade: 0.89,
      eval: 'Art Project',
      date: '2023-05-28',
    },
  ]

  readonly BEHAVIOUR_HEADERS: { key: string; name: string; style?: string }[] =
    [
      { key: 'title', name: 'LernJob' },
      { key: 'competence', name: 'Kompetenzen', style: 'list' },
      { key: 'rating', name: 'Note', style: 'percent' },
      { key: 'date', name: 'Datum', style: 'date' },
    ]

  readonly BEHAVIOR_DUMMY_DATA = [
    {
      title: '1a Die Achsensymmetrie',
      rating: 0.9, // Represents 90%
      date: '2023-05-15',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    {
      title: '1b Die Drehsymmetrie',
      rating: 1, // Represents 76%
      date: '2023-04-10',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    {
      title: '1c Die Achenspiegelung',
      rating: 0.84, // Represents 84%
      date: '2023-03-22',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    {
      title: '1d Die Punktspiegelung',
      rating: 0.94, // Represents 94%
      date: '2023-06-02',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    {
      title: '2a Potenzen/REgeln und Gesetze',
      rating: 0.8, // Represents 80%
      date: '2023-05-05',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    {
      title: '2b Variablen',
      rating: 0.9, // Represents 90%
      date: '2023-04-18',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    {
      title: '2c Teiler, Vielfache und Primzahlen',
      rating: 0.96, // Represents 96%
      date: '2023-03-10',
      competence: ['ukt2c2', 's13t2st-1c2'],
    },
    // {
    //   title: '3a Daten darstellen',
    //   rating: 0.84, // Represents 84%
    //   date: '2023-02-25',
    //   competence: ['ukt2c2', 's13t2st-1c2'],
    // },
    // {
    //   title: '3b Grässen und Prozente',
    //   rating: 0.92, // Represents 92%
    //   date: '2023-01-15',
    //   competence: ['ukt2c2', 's13t2st-1c2'],
    // },
    // {
    //   title: '3c Flächen und Volumen',
    //   rating: 0.88, // Represents 88%
    //   date: '2023-05-28',
    //   competence: ['ukt2c2', 's13t2st-1c2'],
    // },
  ]
}
