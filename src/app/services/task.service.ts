import { Injectable, signal, inject } from '@angular/core';
import { tasks } from '../../mock-data';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = tasks
  todos = signal<Task[]>(this.tasks)
  httpClient = inject(HttpClient)

  constructor() {}


  getAllTasks(){
    return this.todos;
  }


  updateTask(task: Task){
    let taskIndex = this.tasks.findIndex((oldTask) => oldTask.id === task.id)
    this.tasks.splice(taskIndex, 1)
    this.tasks.splice(taskIndex, 0, task)
  }

}
