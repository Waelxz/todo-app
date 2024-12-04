import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent },
  { path: 'todo-reactive-form', component: TodoReactiveFormComponent },
  { path: 'todo-template-driven-form', component: TodoTemplateDrivenFormComponent },
];
