import { Component, inject } from '@angular/core';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-filter-controls',
  imports: [],
  templateUrl: './filter-controls.component.html',
  styleUrl: './filter-controls.component.css'
})
export class FilterControlsComponent {
  taskService = inject(TaskService)

  getAllTasks(){
    this.taskService.getAllTasks()
  }

  getCompletedTasks(){
    this.taskService.filterCompletedTasks()
  }

  getIncompletedTasks(){
    this.taskService.filterIncompletedTasks()
  }

}
