import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Output() sendProduct: EventEmitter<any> = new EventEmitter();
  public cartAddedSubject = new Subject<boolean>();
  arrayObj: any[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    debugger
    return this.http.get<any[]>(`http://localhost:3000/productos`);
  }

  addToCart(obj: any) : Observable<any> {
    debugger;
    let isEqual: boolean = false;
    let objEqual: any = "";

    for (let prod of this.arrayObj){
      if(prod.Products === obj.Products){
        isEqual = true;
        objEqual = prod;
      }
    }

    if (isEqual) {
      this.arrayObj.splice(this.arrayObj.indexOf(objEqual), 1, obj);
    } else {
      this.arrayObj.push(obj);
    }
    console.log("service:", obj);
    return /*this.http.post<any>("http://localhost:3000/ventas",obj)*/ this.arrayObj[this.arrayObj.indexOf(obj)];
  }

  getCartItemsByCustId(name: string) : Observable<any[]>  {
    /*let data = this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?nombre=" + name);
    let { nombre, tipo } = data;
    let copyArrayObj: any[] = this.arrayObj.slice();
    debugger
    let objContent = {
      data: copyArrayObj,
    };

    debugger;
    let arrObj: any[] = []
    arrObj.push(objContent);*/

    return this.http.get<any[]>("http://localhost:3000/usuarios/" + name);
  }

  deleteProduct(nombre: string): Observable<any[]> {
    debugger
    return this.http.delete<any>(`http://localhost:3000/productos?nombre=`+ nombre)
  }

  postCreateProduct(product: any): Observable<any> {
    debugger
    return this.http.post<any>(`http://localhost:3000/productos`, product) ;
  }

  patchModifyProduct(product: any): Observable<any> {
    debugger
    return this.http.patch<any>(`http://localhost:3000/productos`, product)
  }

  getFilterProducts(category: string): Observable<any[]>{
    debugger
    return this.http.get<any>(`http://localhost:3000/productos/` + category);
  }
}
