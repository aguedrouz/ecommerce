import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardHeaderPlaceholder]',
})
export class CardHeaderPlaceholderDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
