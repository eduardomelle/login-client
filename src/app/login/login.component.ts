import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public teste: Login = new Login();

  constructor(private loginSerice: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginSerice.login(this.teste);
  }

}
