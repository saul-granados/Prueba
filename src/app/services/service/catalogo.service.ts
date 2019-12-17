import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(
    private http : HttpClient
  ) { }


  obtenerUsuarios(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(url);
  }


}
