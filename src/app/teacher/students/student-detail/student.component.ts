import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IFile } from 'src/app/shared/utils/interfaces'
import { Location } from '@angular/common'
import { StudentService } from './student.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentDetailComponent {
  id: number
  name: string

  file: IFile = {
    extension: 'pdf',
    name: 'Essay_Studienstiftung_eUFi0uq.pdf',
    url: 'http://127.0.0.1:8000/download/Essay_Studienstiftung_eUFi0uq.pdf',
  }

  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private service: StudentService,
    private location: Location
  ) {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.queryParams['name']
  }

  navigateBack() {
    this.router.navigate(['teacher', 'students'])
  }

  ngOnInit(): void {
    this.service.updateStudent(this.id)
  }

  competences: { name: string; completed: boolean; grade: number }[] = [
    { name: 'Fragen stellen und untersuchen', completed: true, grade: 0.75 },
    { name: 'Informationen erschließen', completed: true, grade: 0.88 },
    { name: 'Ordnen und strukturieren', completed: true, grade: 0.92 },
    { name: 'Modelle entwickeln', completed: true, grade: 0.81 },
    { name: 'Einschätzen und beurteilen', completed: true, grade: 0.79 },
    { name: 'Entwickeln und umsetzen', completed: true, grade: 0.86 },
    { name: 'Mitteilen und austauschen', completed: true, grade: 0.94 },
    { name: 'Naturperspektiven verstehen', completed: true, grade: 0.73 },
    {
      name: 'Gesellschaftsperspektiven erkennen',
      completed: true,
      grade: 0.68,
    },
    { name: 'Technikperspektiven analysieren', completed: true, grade: 0.77 },
    { name: 'Mensch und Gesundheit', completed: true, grade: 0.9 },
    { name: 'Lebensräume begreifen', completed: true, grade: 0.85 },
    { name: 'Wahrnehmung schärfen', completed: true, grade: 0.71 },
    { name: 'Kreativität entwickeln', completed: false, grade: 0 },
    { name: 'Interkulturelle Kommunikation', completed: false, grade: 0 },
    { name: 'Ethik und Werte reflektieren', completed: false, grade: 0 },
    { name: 'Teamarbeit fördern', completed: false, grade: 0 },
    { name: 'Umweltbewusstsein schärfen', completed: false, grade: 0 },
    { name: 'Umweltbewusstsein schärfen', completed: false, grade: 0 },
    { name: 'Selbstmanagement stärken', completed: false, grade: 0 },
    { name: 'Innovation vorantreiben', completed: false, grade: 0 },
    { name: 'Problem lösen', completed: false, grade: 0 },
    { name: 'Kritisches Denken fördern', completed: false, grade: 0 },
    { name: 'Digitale Kompetenz ausbauen', completed: false, grade: 0 },
    { name: 'Projekte planen und umsetzen', completed: false, grade: 0 },
    { name: 'Sprachliche Ausdrucksfähigkeit', completed: false, grade: 0 },
    { name: 'Globales Denken entwickeln', completed: false, grade: 0 },
    { name: 'Medienkompetenz erweitern', completed: false, grade: 0 },
    { name: 'Resilienz aufbauen', completed: false, grade: 0 },
    { name: 'Soziale Verantwortung leben', completed: false, grade: 0 },
    { name: 'Kulturelles Verständnis vertiefen', completed: false, grade: 0 },
    { name: 'Wissenschaftliches Arbeiten', completed: false, grade: 0 },
    { name: 'Finanzielle Bildung', completed: false, grade: 0 },
    { name: 'Entrepreneurship erkunden', completed: false, grade: 0 },
  ]
}
