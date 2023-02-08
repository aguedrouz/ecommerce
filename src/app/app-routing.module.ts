import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product-list/product-list.module').then((module) => module.ProductListModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((module) => module.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
