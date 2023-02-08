import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../common/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsCount: number = 0;
  private cartItemsCountSubscription$: Subscription = new Subscription();

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.initCartItemsCount();
  }

  private initCartItemsCount(): void {
    this.cartItemsCountSubscription$ = this.cartService.cartItemsCount$.subscribe(
      (cartItemsCount) => (this.cartItemsCount = cartItemsCount)
    );
  }

  ngOnDestroy(): void {
    this.cartItemsCountSubscription$.unsubscribe();
  }
}
