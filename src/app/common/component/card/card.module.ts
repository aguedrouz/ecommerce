import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardBodyPlaceholderDirective } from './card/card-body-placeholder.directive';
import { CardBodyDirective } from './card/card-body.directive';
import { CardFooterPlaceholderDirective } from './card/card-footer-placeholder.directive';
import { CardFooterDirective } from './card/card-footer.directive';
import { CardHeaderPlaceholderDirective } from './card/card-header-placeholder.directive';
import { CardHeaderDirective } from './card/card-header.directive';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderDirective,
    CardHeaderPlaceholderDirective,
    CardBodyDirective,
    CardBodyPlaceholderDirective,
    CardFooterDirective,
    CardFooterPlaceholderDirective,
  ],
  exports: [CardComponent, CardBodyDirective, CardHeaderDirective, CardFooterDirective],
  imports: [CommonModule],
})
export class CardModule {}
