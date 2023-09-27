import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  public producto: any = {}

  constructor(
      private productService: ProductService,
      private activateRoute: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    debugger
    this.loadProductSent();
  }

  loadProductSent(){
    this.activateRoute.params.subscribe((params: any) => {
      debugger
      this.producto = params;
    });
  }

  onSubmitProduct(producto: any) {
    debugger
    this.productService.patchModifyProduct(producto).subscribe((result: any) => {
      console.log(result);
    })
  }
}
