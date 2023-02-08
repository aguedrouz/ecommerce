import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from '../../common/model/cart-item.model';
import { Product } from '../../common/model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() cartItemEventEmitter: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  addToCartFormGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.addToCartFormGroup = this.formBuilder.group({ quantity: [1, [Validators.required]] });
  }

  addToCart(event: Event): void {
    event.preventDefault();
    this.cartItemEventEmitter.emit(new CartItem(this.product, this.addToCartFormGroup.controls['quantity'].value));
    this.resetQuantity();
  }

  private resetQuantity(): void {
    this.addToCartFormGroup.patchValue({ quantity: 1 });
  }
}
