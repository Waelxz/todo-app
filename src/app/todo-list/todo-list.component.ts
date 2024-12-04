import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service/todo.service';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodoList().subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(() => this.getTodos());
  }

  displayTodoDetail(todo: Todo): void {
    // Open modal logic goes here (optional)
  }
}
