import { CartItem } from './cart-item.model';

export class CartItems {
  private readonly _items: Map<number, CartItem> = new Map<number, CartItem>();

  get items(): Map<number, CartItem> {
    return this._items;
  }

  addItem(cartItem: CartItem): void {
    const existingCartItem: CartItem | undefined = this._items.get(cartItem.product.id);
    if (existingCartItem !== undefined) {
      existingCartItem.quantity += cartItem.quantity;
    } else {
      this._items.set(cartItem.product.id, cartItem);
    }
  }

  deleteItem(cartItem: CartItem): void {
    this._items.delete(cartItem.product.id);
  }

  get itemsCount(): number {
    let quantitiesSum: number = 0;
    if (this._items.size < 1) return quantitiesSum;
    this._items.forEach((catItem: CartItem) => {
      quantitiesSum += catItem.quantity;
    });
    return quantitiesSum;
  }

  get taxAmount(): number {
    let taxAmountSum: number = 0;
    if (this._items.size < 1) return taxAmountSum;
    this._items.forEach((catItem: CartItem) => {
      taxAmountSum += catItem.taxAmount;
    });
    return taxAmountSum;
  }

  get afterTaxPrice(): number {
    let afterTaxPriceSum: number = 0;
    if (this._items.size < 1) return afterTaxPriceSum;
    this._items.forEach((catItem: CartItem) => {
      afterTaxPriceSum += catItem.afterTaxPrice;
    });
    return afterTaxPriceSum;
  }
}
