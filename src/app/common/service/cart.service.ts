import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart-item.model';
import { CartItems } from '../model/cart-items.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems: CartItems = new CartItems();
  private readonly _cartItems$: BehaviorSubject<CartItems> = new BehaviorSubject<CartItems>(this.cartItems);
  private readonly _cartItemsCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addItem(cartItem: CartItem): void {
    this.cartItems.addItem(cartItem);
    this._cartItems$.next(this.cartItems);
    this._cartItemsCount$.next(this.cartItems.itemsCount);
  }

  deleteItem(cartItem: CartItem): void {
    this.cartItems.deleteItem(cartItem);
    this._cartItems$.next(this.cartItems);
    this._cartItemsCount$.next(this.cartItems.itemsCount);
  }

  get cartItems$(): BehaviorSubject<CartItems> {
    return this._cartItems$;
  }

  get cartItemsCount$(): BehaviorSubject<number> {
    return this._cartItemsCount$;
  }
}
