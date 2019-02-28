import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tasks = [];
  taskInput = '';

  addTask(){
    console.log("Tasks added");
    if (this.taskInput != ''){
      this.tasks.push(this.taskInput);
      this.taskInput = '';
    }
  }

  deleteTask(task:string){
    this.tasks = this.tasks.filter(item => item !== task);
  }
}
