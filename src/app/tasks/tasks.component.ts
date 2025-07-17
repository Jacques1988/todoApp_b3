import { Component, inject, AfterViewInit } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskService = inject(TaskService)
  tasks = inject(TaskService).getAllTasks()

  
  updateTaskStatus(task: Task){
    this.taskService.updateTask(task)
  }


}
