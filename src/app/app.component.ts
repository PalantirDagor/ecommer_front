import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommer_front';
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe(res=> {
      debugger;
      this.loadCart();
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }

  redirectToSale() {
    this.router.navigateByUrl("/sale");
  }

  redirectToCategory() {
    this.router.navigateByUrl("/category");
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId("Pepito").subscribe((res: any)=> {
      // this.cartProducts = res.data;
      debugger
      this.cartProducts.forEach(element => {
          this.subTotal =  this.subTotal + element.precio;
      });
      debugger;
    })
  }
}
