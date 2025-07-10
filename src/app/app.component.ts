import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FilterControlsComponent } from "./filter-controls/filter-controls.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterControlsComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
}
