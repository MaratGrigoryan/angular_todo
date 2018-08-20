import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  todos = [];
  addtasks = false;

  addtask(event) {
    if(event.value !==''){
      this.todos.push(event.value);
      event.value = '';
      this.addtasks = false;
      localStorage.setItem('mytodo', JSON.stringify(this.todos));
      console.log(localStorage.getItem('mytodo'))
    }
    else{
     this.addtasks = true;
    }
  }

  deltask(i) {
    this.todos.splice(i,1)
    localStorage.setItem('mytodo', JSON.stringify(this.todos))
    console.log(localStorage.getItem('mytodo'));
  }
}

