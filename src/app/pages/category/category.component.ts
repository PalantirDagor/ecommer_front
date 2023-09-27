import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoriaList: any [] = [];
  productList: any [] = [];

  constructor(
      private categoryService: CategoryService,
      private productService: ProductService,
    ) {

  }

  ngOnInit(): void {
    debugger
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe((result: any) => {
      this.categoriaList = result;
    })
  }

  filterProducts(categoria: string) {
    this.productService.getFilterProducts(categoria).subscribe((result: any) => {
      this.productList = result;
    })
  }
}
