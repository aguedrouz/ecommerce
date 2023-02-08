import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductCategory } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly BOOK_TAX: number = 10;
  private readonly DEFAULT_TAX: number = 20;
  private readonly IMPORTED_PRODUCT_TAX: number = 5;
  private readonly PRODUCTS_URL = '/assets/products.json';

  constructor(private readonly httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRODUCTS_URL).pipe(
      map((products) => {
        return products.map((product) => {
          return new Product(
            product.id,
            product.productName,
            product.price,
            product.quantity,
            product.isImported,
            product.category,
            this.computeCumulableTaxes(product)
          );
        });
      })
    );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.getProducts().pipe(map((products) => products.filter((product) => product.category === category)));
  }

  getProductCategories(): Observable<Set<string>> {
    return this.getProducts().pipe(map((products) => new Set(products.map((product) => product.category))));
  }

  computeCumulableTaxes(product: Product): number[] {
    const cumulableTaxes: number[] = [];
    switch (product.category) {
      case ProductCategory.MEDICINE:
      case ProductCategory.FOOD:
        break;
      case ProductCategory.BOOK:
        cumulableTaxes.push(this.BOOK_TAX);
        break;
      default:
        cumulableTaxes.push(this.DEFAULT_TAX);
        break;
    }
    if (product.isImported) cumulableTaxes.push(this.IMPORTED_PRODUCT_TAX);
    return cumulableTaxes;
  }
}
