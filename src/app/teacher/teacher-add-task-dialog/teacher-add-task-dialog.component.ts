import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-teacher-add-task-dialog',
  templateUrl: './teacher-add-task-dialog.component.html',
  styleUrls: ['./teacher-add-task-dialog.component.css'],
})
export class TeacherAddTaskDialogComponent implements OnInit {
  taskForm!: FormGroup
  selectedFiles: File[] = []

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildcreateUserForm()
  }

  buildcreateUserForm() {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      text: [''],
    })
  }

  onFileSelected(event: any) {
    this.selectedFiles.push(event.target.files[0])
  }

  get taskData() {
    return {
      title: this.taskForm.value.title,
      text: this.taskForm.value.text,
      files: this.selectedFiles,
    }
  }
}
