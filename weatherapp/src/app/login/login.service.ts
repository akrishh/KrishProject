import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  loggedInUser: string = "";
  constructor() { }

  setLoggedInUser(param: string) {
    this.loggedInUser = param;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }
}
