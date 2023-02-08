import { Component, ContentChild, ViewChild, type AfterContentInit } from '@angular/core';
import { CardBodyPlaceholderDirective } from './card-body-placeholder.directive';
import { CardBodyDirective } from './card-body.directive';
import { CardFooterPlaceholderDirective } from './card-footer-placeholder.directive';
import { CardFooterDirective } from './card-footer.directive';
import { CardHeaderPlaceholderDirective } from './card-header-placeholder.directive';
import { CardHeaderDirective } from './card-header.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterContentInit {
  @ViewChild(CardHeaderPlaceholderDirective, { static: true })
  private readonly _cardHeaderPlaceholder!: CardHeaderPlaceholderDirective;

  @ContentChild(CardHeaderDirective) private readonly _cardHeader!: CardHeaderDirective;

  @ViewChild(CardBodyPlaceholderDirective, { static: true })
  private readonly _cardBodyPlaceholder!: CardBodyPlaceholderDirective;

  @ContentChild(CardBodyDirective) private readonly _cardBody!: CardBodyDirective;

  @ViewChild(CardFooterPlaceholderDirective, { static: true })
  private readonly _cardFooterPlaceholder!: CardFooterPlaceholderDirective;

  @ContentChild(CardFooterDirective) private readonly _cardFooter!: CardFooterDirective;

  ngAfterContentInit(): void {
    this.initBlocks();
  }

  private initBlocks(): void {
    if (this._cardHeader != null) {
      this._cardHeaderPlaceholder.viewContainer.createEmbeddedView(this._cardHeader.template);
    }
    if (this._cardBody != null) {
      this._cardBodyPlaceholder.viewContainer.createEmbeddedView(this._cardBody.template);
    }
    if (this._cardFooter != null) {
      this._cardFooterPlaceholder.viewContainer.createEmbeddedView(this._cardFooter.template);
    }
  }
}
