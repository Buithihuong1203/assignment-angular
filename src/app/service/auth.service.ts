import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  login(data : TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.login, data);
  }
  register(data : TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.register, data);
  }
  getUser(_id: string) : Observable<TypeLoginRequest> {
    return this.http.get<TypeLoginRequest>(`${environment.login}/${_id}`);
  }
  getUsers() : Observable<TypeLoginRequest[]> {
    return this.http.get<TypeLoginRequest[]>(`${environment.users}`);
  }
  deleteUser (_id: string): Observable<any> {
    return this.http.delete(`${environment.users}/${_id}`)
}
updateUser(_id: string, data: TypeLoginResponse): Observable<TypeLoginRequest> {
 return this.http.patch<TypeLoginRequest>(`${environment.users}/${_id}`,data)
}
}
