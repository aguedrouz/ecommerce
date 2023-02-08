import { fakeAsync, TestBed, type ComponentFixture } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { CardModule } from '../../common/component/card/card.module';
import { CartService } from '../../common/service/cart.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const CART_SERVICE: any = {};

  beforeEach(async () => {
    jest.clearAllMocks();

    CART_SERVICE.cartItemsCount$ = new BehaviorSubject<number>(0);

    await TestBed.configureTestingModule({
      imports: [MockModule(CardModule)],
      declarations: [HeaderComponent],
      providers: [{ provide: CartService, useValue: CART_SERVICE }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart items count on loading', fakeAsync(() => {
    // Given
    component.cartItemsCount = 0;
    CART_SERVICE.cartItemsCount$.next(10);

    // When
    component.ngOnInit();

    // Then
    expect(component.cartItemsCount).toEqual(10);
  }));

  it('should refresh cart items count when receiving new cart items count stream', fakeAsync(() => {
    // Given
    component.cartItemsCount = 0;

    // When
    component.ngOnInit();
    CART_SERVICE.cartItemsCount$.next(20);

    // Then
    expect(component.cartItemsCount).toEqual(20);
  }));
});
