import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
})
export class AddTaskDialogComponent implements OnInit {
  taskForm!: FormGroup
  selectedFile?: File

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildcreateUserForm()
  }

  buildcreateUserForm() {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      text: [''],
      weight: [{ value: 1, disabled: true }],
      graded: [false, Validators.required],
    })
  }

  onFileSelected(event: any) {
    const document = event.target.files[0]
    if (document) this.selectedFile = document
  }

  get taskData() {
    const formData: FormData = new FormData()
    if (this.selectedFile) formData.append('file', this.selectedFile)

    const data = this.taskForm.value
    formData.append('title', data.title)
    if (data.text) formData.append('text', data.text)
    formData.append('graded', data.graded)
    formData.append('weight', data.weight || 1)

    return formData
  }

  toggleGraded() {
    const graded: boolean = this.taskForm.value.graded
    const weightControl = this.taskForm.get('weight')
    if (graded) weightControl?.enable()
    else weightControl?.disable()
  }

  removeFile() {
    this.selectedFile = undefined
  }
}
