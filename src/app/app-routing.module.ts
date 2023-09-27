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
import { ModifyProductComponent } from './pages/modify-product/modify-product.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { DeleteCategoryComponent } from './pages/delete-category/delete-category.component';
import { ModifyCategoryComponent } from './pages/modify-category/modify-category.component';

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
  }, {
    path: 'modificar-producto/:nombre/:precio/:detalle/:nombreCategoria/:nombreImagen',
    component: ModifyProductComponent
  }, {
    path: 'eliminar-categoria',
    component: DeleteCategoryComponent
  }, {
    path: 'crear-categoria',
    component: CreateCategoryComponent
  }, {
    path: 'modificar-categoria/:nombre/:descripcion',
    component: ModifyCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
