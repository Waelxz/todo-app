import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodo]' // Nom de la directive
})
export class TodoDirective {
  constructor(private el: ElementRef) {}

  // Méthode pour définir ou supprimer une ombre
  private setShadow(shadow: string) {
    this.el.nativeElement.style.boxShadow = shadow;
  }

  // Gestionnaire pour l'événement lorsque la souris entre
  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow('5px 5px 10px 2px rgba(0,0,0,.5)');
  }

  // Gestionnaire pour l'événement lorsque la souris sort
  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow('none');
  }
}
