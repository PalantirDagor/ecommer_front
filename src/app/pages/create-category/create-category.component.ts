import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  categoria: any = {
    nombre: '',
    descripcion: '',
  }

  constructor(private categotyService: CategoryService) {

  }

  onSubmitCategory() {
    this.categotyService.postCreateCategory(this.categoria).subscribe((result: any) => {
      this.categoria = result;
    })
  }
}
