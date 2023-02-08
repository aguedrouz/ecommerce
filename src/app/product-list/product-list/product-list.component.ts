import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from '../../common/model/cart-item.model';
import { CartItems } from '../../common/model/cart-items.model';
import { Product } from '../../common/model/product.model';
import { CartService } from '../../common/service/cart.service';
import { ProductService } from '../../common/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Set<any> = new Set<any>();
  filterFormGroup: FormGroup;

  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    public readonly formBuilder: FormBuilder
  ) {
    this.filterFormGroup = this.formBuilder.group({ category: ['', [Validators.required]] });
  }

  ngOnInit(): void {
    this.getProducts();
    this.getProductCategories();
  }

  onSelectCategory(): void {
    const category: string = this.filterFormGroup?.controls['category']?.value;
    if (category != null) {
      this.getProductByCategory(category);
    } else {
      this.getProducts();
    }
  }

  addToCart(cartItem: CartItem): void {
    this.cartService.addItem(cartItem);
    cartItem.product.quantity -= cartItem.quantity;
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.updateProductsQuantities();
    });
  }

  private getProductByCategory(category: string): void {
    this.productService.getProductsByCategory(category).subscribe((products) => {
      this.products = products;
      this.updateProductsQuantities();
    });
  }

  private getProductCategories(): void {
    this.productService.getProductCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  private updateProductsQuantities(): void {
    this.cartService.cartItems$
      .subscribe((cartItems: CartItems) => {
        cartItems.items.forEach((cartItem: CartItem) => {
          const product: Product | undefined = this.getProductById(cartItem.product.id);
          if (product !== undefined) {
            product.quantity -= cartItem.quantity;
          }
        });
      })
      .unsubscribe();
  }

  private getProductById(productId: number): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }
}
