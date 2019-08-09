import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  user: any;

  constructor() {}

  isAuthenticate(): boolean {
    return !!this.user;
  }

  // login() {
  //   this.user = {
  //     userName: 'admin',
  //     password: 'admin1'
  //   };
  // }
}
