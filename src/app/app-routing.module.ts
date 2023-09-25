import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'productos',
    component: HomeComponent
  }, {
    path: 'carrito',
    component: CartComponent
  }, {
    path: 'venta',
    component: SaleComponent
  }, {
    path: 'categorias',
    component: CategoryComponent
  }, {
    path: 'ingresar',
    component: LoginComponent
  }, {
    path: 'panel',
    component: PanelComponent
  }, {
    path: 'eliminar-producto',
    component: DeleteProductComponent
  }, {
    path: 'crear-producto',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
