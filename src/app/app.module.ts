import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {SharedModule} from "./shared/shared.module";
import {TasksModule} from "./tasks/tasks.module";



@NgModule(
  {
    declarations: [AppComponent, UserComponent,  HeaderComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
  }
)
export class AppModule{

}
