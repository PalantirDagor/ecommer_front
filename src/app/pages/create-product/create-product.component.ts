import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  categoryList: any [] = [];

  producto: any = {
    nombre: '',
    precio: 0,
    detalle: '',
    categoria: null,
    nombreImagen: ''
  }

  constructor(
      private categotyService: CategoryService,
      private productService: ProductService
    ) {

  }

  ngOnInit(): void {
    debugger
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categotyService.getAllCategories().subscribe((result: any) => {
      this.categoryList = result;
    })
  }

  onSubmitProduct() {
    this.productService.postCreateProduct(this.producto).subscribe((result: any) => {
      this.producto = result;
    })
  }
}
