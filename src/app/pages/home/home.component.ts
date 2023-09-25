import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any [] = [];
  cartObj : any = {
    "CustomerName": "",
    "Products": [],
    "Quantity": 0
  };
  constructor(private productService: ProductService) {

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

  addItemToCart(product: string) {
    debugger;
    this.cartObj.Products.push(product);
    this.cartObj.Quantity += 1;
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
      console.log("result: ", result);
       if(result) {
        alert("Producto Anadido Al Carrito");
        this.productService.cartAddedSubject.next(true);
       }
    })
  }
}
