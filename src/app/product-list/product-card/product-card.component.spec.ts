import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { CardModule } from '../../common/component/card/card.module';
import { CartItem } from '../../common/model/cart-item.model';
import { Product, ProductCategory } from '../../common/model/product.model';
import { CartService } from '../../common/service/cart.service';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const cartService = {
    addItem: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(CardModule)],
      declarations: [ProductCardComponent],
      providers: [{ provide: CartService, useValue: cartService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cart item and reset quantity to 1 on add to cart', () => {
    // Given
    const product: Product = new Product(1, 'P', 10, 10, false, ProductCategory.ELECTRIC, []);
    const quantity: number = 10;

    component.product = product;
    component.addToCartFormGroup.patchValue({ quantity });
    component.cartItemEventEmitter.emit = jest.fn();
    const mouseEvent = new MouseEvent('Click');
    mouseEvent.preventDefault = jest.fn();

    // When
    component.addToCart(mouseEvent);

    // Then
    expect(mouseEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(component.cartItemEventEmitter.emit).toHaveBeenCalledTimes(1);
    expect(component.cartItemEventEmitter.emit).toHaveBeenCalledWith(new CartItem(product, quantity));
    expect(component.addToCartFormGroup.controls['quantity'].value).toEqual(1);
  });
});
