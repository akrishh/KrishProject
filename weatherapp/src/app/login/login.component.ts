import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  username = '';
  loginusername = '';
  loginFlag = false;

  onLogin() {
    this.username = this.loginusername;
    this.loginFlag = true;
    // this.loginService.loggedInUser = this.loginusername;
    this.loginService.setLoggedInUser(this.loginusername);
    this.router.navigate(['home']);
  }

}
