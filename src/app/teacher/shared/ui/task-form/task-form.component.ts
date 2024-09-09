import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { startWith, tap } from 'rxjs'
import { ITask } from 'src/app/shared/utils/interfaces'

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
    @Inject(MAT_DIALOG_DATA) protected task?: ITask
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
    formData.append('title', data.title)
    formData.append('text', data.text)
    formData.append('graded', JSON.stringify(data.graded))
    formData.append('weight', JSON.stringify(data.weight || 1))
    formData.append('isSelfControl', JSON.stringify(data.isSelfControl))
    return formData
  }
  private buildForm() {
    if (this.task) {
      this.form = this.fb.group({
        title: [this.task.title, [Validators.maxLength(50)]],
        text: [this.task.text],
        weight: [this.task.weight],
        graded: [this.task.graded, Validators.required],
        isSelfControl: [this.task.isSelfControl, Validators.required],
      })
      if (this.task.file) this.fileName = this.task.file.name
    } else {
      this.form = this.fb.group({
        title: ['', [Validators.maxLength(50)]],
        text: [''],
        weight: [1],
        graded: [false, Validators.required],
        isSelfControl: [false, Validators.required],
      })
    }
    const weightControl = this.form.get('weight')
    const isSelfControl = this.form.get('isSelfControl')
    this.form
      .get('graded')
      ?.valueChanges.pipe(
        startWith(this.form.get('graded')?.value),
        tap((isGraded) => {
          if (isGraded) {
            weightControl?.enable()
            isSelfControl?.enable()
          } else {
            weightControl?.disable()
            isSelfControl?.disable()
          }
        })
      )
      .subscribe()
  }
}