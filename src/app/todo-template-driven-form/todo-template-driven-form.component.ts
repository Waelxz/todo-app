import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo-service/todo.service';
import { Todo } from '../interfaces/todo';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css']
})
export class TodoTemplateDrivenFormComponent {

  constructor(private todoService: TodoService) {}

  addTodo(form: NgForm): void {
    if (form.valid) {
      const todo: Todo = form.value;
      this.todoService.addTodo(todo).subscribe();
    }
  }
}
