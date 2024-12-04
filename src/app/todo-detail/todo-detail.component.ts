import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../todo-service/todo.service';

@Component({
  selector: 'app-todo-detail',
  
  
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  updateTodoStatus(): void {
    this.todo.done = !this.todo.done;
    this.todoService.updateTodo(this.todo).subscribe();
  }
}
