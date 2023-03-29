import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Itask } from '../../interfaces/itask';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() btnText = '';
  @Input() currentTitle = '';
  @Input() currentDescription = '';
  @Input() currentCatagory = '';
  @Input() currentTaskDate = '';
  @Input() currentPriorityLevel = '';
  @Input() currentProgressLevel = '';

  title: string = '';
  description: string = '';
  catagory: string = '';
  task_date: string = '';
  priority_level: string = '';
  progress_level: string = '';

  @Output() onSubmit = new EventEmitter<Itask>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.title = this.currentTitle;
    this.description = this.currentDescription;
    this.catagory = this.currentCatagory;
    this.task_date = this.currentTaskDate;
    this.priority_level = this.currentPriorityLevel;
    this.progress_level = this.currentProgressLevel;
  }

  onClick(): void {
    this.onSubmit.emit({
      id: null!,
      title: this.title,
      description: this.description,
      catagory: this.catagory,
      task_date: this.task_date,
      priority_level: this.currentPriorityLevel,
      progress_level: this.currentProgressLevel,
    });
  }
}
