import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from '../common/component/card/card.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterLink, CardModule, CartRoutingModule],
})
export class CartModule {}
