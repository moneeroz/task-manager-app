import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  taskForm;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      task_date: ['', Validators.required],
      catagory: ['', Validators.required],
      priority_level: ['', Validators.required],
      progress_level: ['', Validators.required],
    });
  }

  get titleFormControl() {
    return this.taskForm.get('title');
  }

  get descriptionFormControl() {
    return this.taskForm.get('description');
  }

  get taskDateFormControl() {
    return this.taskForm.get('task_date');
  }

  get catagoryFormControl() {
    return this.taskForm.get('catagory');
  }

  get priorityLevelFormControl() {
    return this.taskForm.get('priority_level');
  }

  get progressLevelFormControl() {
    return this.taskForm.get('progress_level');
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.taskForm.reset();
  }
}
