import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryCreate } from '../types/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // khai báo http để có đối tượng httpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }
 // kiểu dữ liệu observable sẽ giúp lắng nghe api trả về kết quả
  getCategories (): Observable<Category[]> {
     return this.http.get<Category[]>(environment.categories);
  }
  getCategory (_id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.categories}/${_id}`)

  }
  deleteCategory (_id: string): Observable<any> {
      return this.http.delete(`${environment.categories}/${_id}`)
  }
  createCategory(data: CategoryCreate): Observable<Category> {
    return this.http.post<Category>(`${environment.categories}`,data)
  }
  updateCategory(_id: string, data: CategoryCreate): Observable<Category> {
    return this.http.patch<Category>(`${environment.categories}/${_id}`,data)
  }
}
