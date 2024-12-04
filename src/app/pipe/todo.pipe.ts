import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {
  transform(todos: any[]): any[] {
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
    const currentTime = new Date().getTime();

    return todos.map(todo => {
      const dueDate = new Date(todo.dueDate).getTime(); // Convert dueDate to milliseconds
      const isCloseToDeadline = (dueDate - currentTime) <= twoDaysInMillis;

      // Add a red border style if close to the deadline
      return {
        ...todo,
        style: isCloseToDeadline ? 'border: 2px solid red;' : '',
      };
    });
  }
}
