import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://localhost:3000/api"
  constructor(private http: HttpClient,
    private router: Router) { }

  singUp(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }
  singIn(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggenIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
