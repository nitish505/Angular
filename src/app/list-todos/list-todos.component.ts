import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {

  constructor(

    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,


  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})




export class ListTodosComponent implements OnInit {

  public deleteMessage: String
  todos: Todo[]
  // [
  //   new Todo(1, 'start coding', false, new Date()),
  //   new Todo(2, 'Angular 7 for full Stack', false, new Date()),
  //   new Todo(3, 'spring boot for backend', false, new Date())

  //   //   {id:1,description: 'Learn Coding '},
  //   // {id:2,description:'Angular 7  for Full Stack'},
  //   // {id:3, description:'spring boot for backend'}


  // ]
  constructor(private todoDataService: TodoDataService,private router:Router) {

  }

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id) {
    console.log(`Delete Todo of ${id} successful`)
    this.todoDataService.deleteTodo("Nitish", id).subscribe(

      response => {
        console.log(response);
        
        this.deleteMessage = `Todo deletion successfull for id ${id}`;
        this.refreshTodos();
      }
    );


  }
  updateTodo(id)
  {
    console.log(`Update Todo of ${id} successful`);
    this.router.navigate(['todos',id])
  }
  refreshTodos()
  {
    this.todoDataService.retrieveAllTodos("Nitish").subscribe(

      response => {
        console.log(response)
        this.todos = response
      }

    );
  }
  addTodo()
  {
    this.router.navigate(['todos',-1])
  }
}




