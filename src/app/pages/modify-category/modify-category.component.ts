import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css']
})
export class ModifyCategoryComponent implements OnInit {

  public categoria: any = {}

  constructor(
      private categoriaService: CategoryService,
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
      this.categoria = params;
    });
  }

  onSubmitCategory(category: any) {
    debugger
    this.categoriaService.patchModifyCategory(category).subscribe((result: any) => {
      console.log(result);
    })
  }
}
