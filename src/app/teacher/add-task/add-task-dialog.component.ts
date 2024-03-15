import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-task-dialhjog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
})
export class AddTaskDialogComponent implements OnInit {
  form!: FormGroup
  selectedFile?: File

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  onFileSelected(event: any) {
    const document = event.target.files[0]
    if (document) this.selectedFile = document
  }

  get taskData() {
    const formData: FormData = new FormData()
    if (this.selectedFile) formData.append('file', this.selectedFile)

    const data = this.form.value
    formData.append('title', data.title)
    if (data.text) formData.append('text', data.text)
    formData.append('graded', data.graded)
    formData.append('weight', data.weight || 1)

    return formData
  }

  toggleGraded() {
    const graded: boolean = this.form.value.graded
    const weightControl = this.form.get('weight')
    if (graded) weightControl?.enable()
    else weightControl?.disable()
  }

  removeFile() {
    this.selectedFile = undefined
  }

  private buildForm() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      text: [''],
      weight: [1],
      graded: [false, Validators.required],
    })
  }
}
