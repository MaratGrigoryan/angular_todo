import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  i(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  todoss = [];
  title = "Hello in my ToDo App";
  addtasks:boolean;


  constructor (private appservice: AppServiceService) {}

  ngOnInit(){
    this.todoss = this.appservice.todos
    this.addtasks = this.appservice.addtasks
  }

  addtask(event){
    this.appservice.addtask(event)
  }

  deltask(i){
    this.appservice.deltask(i)
  }

}