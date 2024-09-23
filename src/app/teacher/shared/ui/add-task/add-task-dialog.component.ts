import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { startWith, tap } from 'rxjs'

@Component({
  selector: 'app-add-task-dialhjog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
})
export class AddTaskComponent implements OnInit {
  form!: FormGroup
  file?: File
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  selectFile(file: File) {
    this.file = file
  }

  discardFile() {
    this.file = undefined
  }

  get taskData() {
    const formData: FormData = new FormData()

    if (this.file) formData.append('file', this.file)

    const data = this.form.value
    if (data.title) formData.append('title', data.title)
    if (data.text) formData.append('text', data.text)
    formData.append('graded', JSON.stringify(data.graded))
    formData.append('weight', JSON.stringify(data.weight))
    formData.append('isSelfControl', JSON.stringify(data.isSelfControl))
    formData.append('isSubmission', JSON.stringify(data.isSelfControl))

    return formData
  }

  private buildForm() {
    this.form = this.fb.group({
      title: ['', [Validators.maxLength(50)]],
      text: [''],
      weight: [1],
      graded: [false, Validators.required],
      isSelfControl: [false, Validators.required],
      isSubmission: [false, Validators.required],
    })
  }
}
