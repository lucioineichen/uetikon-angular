import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { startWith, tap } from 'rxjs'
import { ITask } from 'src/app/shared/utils/interfaces'

export const emptyTask: ITask = {
  _id: 0,
  title: '',
  text: '',
  weight: 1,
  graded: false,
  isSelfControl: false,
  isSubmission: false,
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  form!: FormGroup
  file?: File
  filePristine = true
  fileName?: string
  showText = false
  showName = false
  toggleShowText() {
    this.showText = !this.showText
    if (this.showText) this.showName = false
  }
  toggleShowName() {
    this.showName = !this.showName
    if (this.showName) this.showText = false
  }
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) protected task: ITask = emptyTask
  ) {}
  ngOnInit(): void {
    this.buildForm()
  }
  selectFile(file: File) {
    this.file = file
    this.fileName = file.name
    this.filePristine = false
  }
  discardFile() {
    this.file = undefined
    this.fileName = undefined
    this.filePristine = false
  }
  get taskData() {
    const formData: FormData = new FormData()
    if (this.file) formData.append('file', this.file)
    if (!this.fileName) formData.append('file', '')
    const data = this.form.value
    formData.append('title', JSON.stringify(data.title))
    formData.append('text', JSON.stringify(data.text))
    formData.append('graded', JSON.stringify(data.graded))
    formData.append('weight', JSON.stringify(data.weight))
    formData.append(
      'isSelfControl',
      JSON.stringify(data.isSelfControl || false)
    )
    formData.append('isSubmission', JSON.stringify(data.isSubmission || false))

    return formData
  }
  private buildForm() {
    this.form = this.fb.group({
      title: [this.task.title, [Validators.maxLength(50)]],
      text: [this.task.text],
      weight: [this.task.weight],
      isSelfControl: [this.task.isSelfControl, Validators.required],
      graded: [this.task.graded, Validators.required],
      isSubmission: [this.task.isSubmission, Validators.required],
    })
    if (this.task.file) this.fileName = this.task.file.name

    const gradedCtrl = this.form.get('graded')
    const isSelfControl = this.form.get('isSelfControl')
    const isSubmission = this.form.get('isSubmission')
    gradedCtrl?.valueChanges
      .pipe(
        startWith(gradedCtrl?.value),
        tap((isGraded) => {
          if (isGraded) {
            isSelfControl?.enable()
            isSubmission?.enable()
          } else {
            isSelfControl?.setValue(false)
            isSubmission?.setValue(false)
            isSelfControl?.disable()
            isSubmission?.disable()
          }
        })
      )
      .subscribe()
  }
}
