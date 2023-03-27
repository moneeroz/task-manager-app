import { Component, Input } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Itask;
}
