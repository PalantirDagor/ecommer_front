import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productList: any [] = [];
  constructor(
      private productService: ProductService,
      private router: Router,
    ) {

  }

  ngOnInit(): void {
    debugger
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result;
    })
  }

  deleteProductSelected(nombre: string) {
    this.productService.deleteProduct(nombre).subscribe((result: any) => {
      if(result) {
        console.log(result);
      } else {
        console.log("error");
      }
    })
  }

  navigateCreateProduct() {
    this.router.navigate(['/crear-producto']);
  }

  sendModifyProduct({nombre, precio, detalle, nombreCategoria, nombreImagen}: any) {
    this.router.navigate(['/modificar-producto', nombre, precio, detalle, nombreCategoria, nombreImagen]);
  }
}
