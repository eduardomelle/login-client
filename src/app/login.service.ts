import { Injectable } from '@angular/core';
import { Login } from './login/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login) {
    alert(login.username + " | " + login.password);
    this.http.post('http://localhost:8080/login', login).subscribe(res => {
      alert(res.code + " | " + res.message);
    });
  }

}
