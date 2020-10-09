import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = "TODO List";
	subtitle = "A place to store your to-dos";
	
	toDoList: ToDo[] = [
		{
      task: "Fold Clothes", 
      completed: false
    },
		{
      task: "Put Clothes In Dresser", 
      completed: false
    },
		{
      task: "Relax", 
      completed: false
    },
		{
      task: "Try To Pet Cat", 
      completed: true
    },
		{
      task: "Pet Dog", 
      completed: false
    },
		{
      task: "Be Awesome", 
      completed: false
    }
	];

	addTask(newItem: string) {
		this.toDoList.push({task: newItem, completed: false});
	}

	completeTask(completeMe: ToDo) {
			completeMe.completed = true;
	}

	removeTask(remove: ToDo) {
		this.toDoList.splice(this.toDoList.indexOf(remove), 1);
	}

	completeToDoList(){
		if (this.toDoList.length == 0 || this.toDoList.filter(x => x.completed == true).length == this.toDoList.length) {
			return true;
		}
		else {
			return false;
		}
	}
}

interface ToDo {
	task: string;
	completed: boolean;
}
