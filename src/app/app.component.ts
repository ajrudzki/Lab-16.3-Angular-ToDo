import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
 
  toDoList: List[] = [
    {
      task: 'Fold Clothes',
      complete: false
    },
    {
      task: 'Put Clothes In Dresser',
      complete: false
    },
    {
      task: 'relax',
      complete: false
    },
    {
      task: 'Try To Pet Cat',
      complete: true
    },
    {
      task: 'Pet Dog',
      complete: false
    },
    {
      task: 'Be Awesome',
      complete: false
    }
  ];

  addTask(newtask: string){
    this.toDoList.push({task: newtask, complete: false});
  }

  completeTask(iscomplete: List){
    iscomplete.complete = true;
  }
    
  removeTask(remove: List){
    this.toDoList = this.toDoList.filter(item=>item!==remove);
    console.log("you finished your task")
  }  
}

interface List {
  task: string,
  complete: boolean
};