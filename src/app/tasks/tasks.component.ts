import {Component, Input} from '@angular/core';

import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',

  templateUrl: './tasks.component.html',

  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name: string | undefined;
  @Input({required: true}) userId!: string;
  isCreatingTask = false;
  constructor(private tasksService: TasksService){}
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }
  onCreateTask(){
    this.isCreatingTask = true;
  }

  onCloseCreateTask(){
    this.isCreatingTask = false;
  }
}
