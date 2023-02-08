import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardBodyPlaceholder]',
})
export class CardBodyPlaceholderDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
