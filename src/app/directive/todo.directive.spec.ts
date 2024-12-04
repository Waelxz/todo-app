import { TodoDirective } from '../directive/todo.directive';
import { ElementRef } from '@angular/core';

describe('TodoDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('div')); // Mock ElementRef
    const directive = new TodoDirective(mockElementRef); // Pass mockElementRef
    expect(directive).toBeTruthy();
  });
});
