import { roundToNearestFive } from '../utils/number-utils';

export class Product {
  private readonly _id: number;
  private readonly _productName: string;
  private readonly _price: number;
  private _quantity: number;
  private readonly _isImported: boolean;
  private readonly _category: ProductCategory;
  private _cumulableTaxes: number[];

  constructor(
    id: number,
    productName: string,
    price: number,
    quantity: number,
    isImported: boolean,
    category: ProductCategory,
    cumulableTaxes: number[] = []
  ) {
    this._id = id;
    this._productName = productName;
    this._price = price;
    this._quantity = quantity;
    this._isImported = isImported;
    this._category = category;
    this._cumulableTaxes = cumulableTaxes;
  }

  get id(): number {
    return this._id;
  }

  get productName(): string {
    return this._productName;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }

  get isImported(): boolean {
    return this._isImported;
  }

  get category(): ProductCategory {
    return this._category;
  }

  get cumulableTaxes(): number[] {
    return this._cumulableTaxes;
  }

  set cumulableTaxes(cumulableTaxes: number[]) {
    this._cumulableTaxes = cumulableTaxes;
  }

  get taxPercent(): number {
    if (this.cumulableTaxes?.length <= 0) return 0;
    return this.cumulableTaxes?.reduce(
      (cumulableTaxesSum: number, cumulableTaxe: number) => cumulableTaxesSum + cumulableTaxe
    );
  }

  get taxAmount(): number {
    let taxAmount: number = 0;
    this.cumulableTaxes.forEach((cumulableTaxe) => {
      taxAmount += roundToNearestFive((this.price * cumulableTaxe) / 100);
    });
    return taxAmount;
  }

  get afterTaxPrice(): number {
    return this.price + this.taxAmount;
  }
}

export enum ProductCategory {
  FOOD = 'Food',
  MEDICINE = 'Medecine',
  BOOK = 'Books',
  ELECTRIC = 'Electric',
  PARFUME = 'Parfum',
}
