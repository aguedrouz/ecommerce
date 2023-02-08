import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardFooterPlaceholder]',
})
export class CardFooterPlaceholderDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
