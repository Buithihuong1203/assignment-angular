import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

  }
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);

  }
  getProduct (_id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${_id}`);

  }
  deleteProduct(_id: string) : Observable<any>{
    return this.http.delete(`${environment.products}/${_id}`);

  }
  createProduct(data: ProductCreate): Observable<Product>{
    return this.http.post<Product>(`${environment.products}`, data);
  }
  updateProduct(_id: string , data: ProductCreate): Observable<Product>{
    return this.http.patch<Product>(`${environment.products}/${_id}`, data)
  }
  getProductByCate(_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.categories}/${_id}`)
  }
}
