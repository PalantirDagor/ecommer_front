import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    debugger
    return this.http.get<any[]>(`http://localhost:3000/categorias`)
  }

  deleteCategory(nombre: string): Observable<any[]> {
    debugger
    return this.http.delete<any>(`http://localhost:3000/categorias?nombre=`+ nombre)
  }

  postCreateCategory(category: any): Observable<any> {
    debugger
    return this.http.post<any>(`http://localhost:3000/categorias`, category) ;
  }

  patchModifyCategory(category: any): Observable<any> {
    debugger
    return this.http.patch<any>(`http://localhost:3000/categorias`, category)
  }
}
