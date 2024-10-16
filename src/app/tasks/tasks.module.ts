import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {TasksComponent} from "./tasks.component";
import {TaskComponent} from "./task/task.component";
import {CreateComponent} from "./create/create.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [TasksComponent, TaskComponent, CreateComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule{

}
