import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
