import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product, ProductCategory } from '../model/product.model';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.each`
    productCategory             | isExportable | cumulableTaxes
    ${ProductCategory.FOOD}     | ${false}     | ${[]}
    ${ProductCategory.MEDICINE} | ${false}     | ${[]}
  `('should not apply taxes for fist necessity products', async ({ productCategory, isExportable, cumulableTaxes }) => {
    expect(service.computeCumulableTaxes(createProduct(productCategory, isExportable))).toEqual(cumulableTaxes);
  });

  it.each`
    productCategory             | isExportable | cumulableTaxes
    ${ProductCategory.BOOK}     | ${false}     | ${[10]}
    ${ProductCategory.ELECTRIC} | ${false}     | ${[20]}
    ${ProductCategory.PARFUME}  | ${false}     | ${[20]}
    ${ProductCategory.FOOD}     | ${true}      | ${[5]}
    ${ProductCategory.MEDICINE} | ${true}      | ${[5]}
    ${ProductCategory.BOOK}     | ${true}      | ${[10, 5]}
    ${ProductCategory.ELECTRIC} | ${true}      | ${[20, 5]}
    ${ProductCategory.PARFUME}  | ${true}      | ${[20, 5]}
  `(
    'should apply taxes $cumulableTaxes for $productCategory when isExportable is $isExportable',
    async ({ productCategory, isExportable, cumulableTaxes }) => {
      expect(service.computeCumulableTaxes(createProduct(productCategory, isExportable))).toEqual(cumulableTaxes);
    }
  );

  function createProduct(productCategory: ProductCategory, isExportable: boolean): Product {
    return new Product(1, 'P', 10, 20, isExportable, productCategory, []);
  }
});
