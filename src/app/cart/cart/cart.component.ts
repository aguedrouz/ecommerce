import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../../common/model/cart-item.model';
import { CartItems } from '../../common/model/cart-items.model';
import { CartService } from '../../common/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItems = new CartItems();
  private readonly cartItemsSubscription$: Subscription = new Subscription();

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.initCartItems();
  }

  private initCartItems(): void {
    this.cartService.cartItems$.subscribe((cartItems: CartItems) => (this.cartItems = cartItems));
  }

  deleteItem(cartItem: CartItem): void {
    this.cartService.deleteItem(cartItem);
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription$.unsubscribe();
  }
}
