import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  categoryList: any [] = [];
  constructor(
      private categoryService: CategoryService,
      private router: Router,
    ) {

  }

  ngOnInit(): void {
    debugger
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe((result: any) => {
      this.categoryList = result;
    })
  }

  deleteCategorySelected(nombre: string) {
    this.categoryService.deleteCategory(nombre).subscribe((result: any) => {
      if(result) {
        console.log(result);
      } else {
        console.log("error");
      }
    })
  }

  navigateCreateCategory() {
    this.router.navigate(['/crear-categoria']);
  }

  sendModifyCategory({nombre, descripcion}: any) {
    this.router.navigate(['/modificar-categoria', nombre, descripcion]);
  }
}
