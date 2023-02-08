import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCardBody]',
})
export class CardBodyDirective {
  constructor(public template: TemplateRef<any>) {}
}
