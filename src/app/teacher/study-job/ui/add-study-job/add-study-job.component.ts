import { Component, OnInit } from '@angular/core'
import { AddStudyJobService } from './add-study-job.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-study-job',
  templateUrl: './add-study-job.component.html',
  styleUrls: ['./add-study-job.component.css'],
})
export class AddStudyJobComponent implements OnInit {
  form!: FormGroup

  get subjectControl(): FormControl {
    return this.form.get('subject') as FormControl
  }
  get compControl(): FormControl {
    return this.form.get('competences') as FormControl
  }

  get tasksControl(): FormControl {
    return this.form.get('tasks') as FormControl
  }

  constructor(protected service: AddStudyJobService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      graded: [true, [Validators.required]],
      weight: [1],
      subject: ['', [Validators.required]],
      notes: [''],
      competences: ['', [Validators.required]],
      tasks: [''],
    })
  }
}
