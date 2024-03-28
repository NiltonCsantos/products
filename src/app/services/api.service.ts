import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { FormProduct } from '../models/formProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://json-sever-five.vercel.app/";

  constructor(private httClient:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.httClient.get<Product[]>(`${this.url}products`)
  }


  getProduct(id:string):Observable<Product>{

    return this.httClient.get<Product>(`${this.url}products/${id}`)

  }

  deleleteProduct(id:number):Observable<Object>{

     return this.httClient.delete(`${this.url}products/${id}`)
  }

  cadastreProduct(product:FormProduct):Observable<void>{

    return this.httClient.post<void>(`${this.url}products`, product)

  }

  putProduct(product:Product): Observable<Object>{
    return this.httClient.put(`${this.url}products/${product.id}`, product )
  }

}
