import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ICompetence, IStudyJob, ITask } from 'src/app/interfaces'
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component'
import { DialogRef } from '@angular/cdk/dialog'
import { tap } from 'rxjs'
import { TeacherChooseCompetencesDialogComponent } from '../teacher-choose-competences-dialog/teacher-choose-competences-dialog.component'
import { Subjects } from 'src/app/enums'

@Component({
  selector: 'app-teacher-create-study-job-dialog',
  templateUrl: './teacher-create-study-job-dialog.component.html',
  styleUrls: ['./teacher-create-study-job-dialog.component.css'],
})
export class TeacherCreateStudyJobDialogComponent {
  studyJobForm!: FormGroup
  tasks: any[] = []
  competences: ICompetence[] = []
  subjects: { name: string; value: number }[] = []

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    for (const [key, value] of Object.entries(Subjects)) {
      if (!Number.isNaN(+key)) {
        this.subjects.push({
          name: value as string,
          value: +key,
        })
      }
    }
  }

  ngOnInit() {
    this.buildcreateUserForm()

    this.studyJobForm
      .get('graded')
      ?.valueChanges.pipe(
        tap((graded) => {
          const weight = this.studyJobForm.get('weight')
          if (graded) weight?.enable()
          else weight?.disable()
        })
      )
      .subscribe()
  }

  buildcreateUserForm() {
    this.studyJobForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      graded: [true, [Validators.required]],
      weight: [1],
      subject: ['', [Validators.required]],
      notes: [''],
    })
  }

  addCompetences() {
    this.dialog.open(TeacherChooseCompetencesDialogComponent, {
      data: this.competences,
    })
  }

  addTask() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent)

    dialogRef.afterClosed().subscribe({
      next: (taskData) => {
        this.tasks.push(taskData)
      },
    })
  }

  get studyJobData() {
    return {
      name: this.studyJobForm.value.name,
      weight: this.studyJobForm.value.weight,
      graded: this.studyJobForm.value.graded,
      subject: this.studyJobForm.value.subject,
      competences: this.competences,
      tasks: this.tasks,
      notes: this.studyJobForm.value.notes || undefined,
    }
  }
}
