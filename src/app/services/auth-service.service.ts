import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  loginUser(nombre: string, clave: string): Observable<any>{
    debugger
    let params = {
      nombre,
      clave
    }
    return this.http.get<any>(`http://localhost:3000/usuarios`, {observe: "body", params});
  }
}
