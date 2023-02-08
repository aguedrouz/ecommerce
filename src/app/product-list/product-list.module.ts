import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../common/component/card/card.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [CommonModule, CardModule, ReactiveFormsModule, ProductListRoutingModule],
  exports: [ProductCardComponent],
})
export class ProductListModule {}
