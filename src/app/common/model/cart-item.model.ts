import { Product } from './product.model';

export class CartItem {
  private readonly _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get product(): Product {
    return this._product;
  }

  get taxAmount(): number {
    return this.product?.taxAmount * this.quantity;
  }

  get afterTaxPrice(): number {
    return this.product?.afterTaxPrice * this.quantity;
  }
}
