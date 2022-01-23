import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _router: Router) { }

  username = '';
  loginusername = '';
  loginFlag = false;


  onLogin() {
    this.username = this.loginusername;
    this.loginFlag = true;
    this._router.navigate(['home']);
  }

}
