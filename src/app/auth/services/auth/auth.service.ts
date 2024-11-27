import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; // URL de votre API Spring Boot

constructor(private http: HttpClient) {}

registerUser(user: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/signup`, user);
}

loginUser(credentials: { email: string; password: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, credentials);
}


}
