import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {CreateComponent} from "./create/create.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [
    TaskComponent,
    CreateComponent
  ],
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
