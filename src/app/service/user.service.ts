import {Injectable} from '@angular/core';
import {IUser} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static STATUS_ONLINE = 'online';
  static STATUS_OFFLINE = 'offline';
  static STATUS_IDLE = 'idle';
  userList: IUser[] = [
    {username: 'admin', name: 'Charlize Theron', password: 'admin', status: 'offline'},
    {username: 'admin1', name: 'Julia Robert', password: 'admin1', status: 'offline'},
    {username: 'admin2', name: 'Brad Pitt', password: 'admin2', status: 'offline'},
    {username: 'admin3', name: 'Chris Hemsworth', password: 'admin3', status: 'offline'},
    {username: 'admin4', name: 'Elizabeth Olsen', password: 'admin4', status: 'idle'},
    {username: 'admin5', name: 'Channing Tatum', password: 'admin5', status: 'idle'}
  ];
  loginUser: IUser = {
    username: 'admin',
    password: 'admin',
    name: 'Charlize Theron',
    status: 'online'
  }; // Test login user

  addtoUserList(user: IUser) {
    this.userList.push(user);
  }

  login(user: IUser): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].username === user.username) && (this.userList[i].password === user.password)) {
        this.userList[i].status = UserService.STATUS_ONLINE;
        this.loginUser = this.userList[i];
        return true;
      }
    }
    return false;
  }

  constructor() {
  }
}
