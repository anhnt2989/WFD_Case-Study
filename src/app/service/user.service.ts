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
    // tslint:disable-next-line:max-line-length
    {username: 'admin', name: 'Charlize Theron', password: 'admin', status: 'offline', userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Charlize_Theron_Cannes_2015_2.jpg/300px-Charlize_Theron_Cannes_2015_2.jpg'},
    // tslint:disable-next-line:max-line-length
    {username: 'admin1', name: 'Julia Robert', password: 'admin1', status: 'offline', userImg: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Julia_Roberts_2011_Shankbone_3.JPG'},
    // tslint:disable-next-line:max-line-length
    {username: 'admin2', name: 'Brad Pitt', password: 'admin2', status: 'offline', userImg: 'https://www.thesun.co.uk/wp-content/uploads/2019/08/NINTCHDBPICT000000761773-1.jpg'},
    // tslint:disable-next-line:max-line-length
    {username: 'admin3', name: 'Chris Hemsworth', password: 'admin3', status: 'offline', userImg: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg'},
    // tslint:disable-next-line:max-line-length
    {username: 'admin4', name: 'Elizabeth Olsen', password: 'admin4', status: 'idle', userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Elizabeth_Olsen1_%28cropped%29.jpg/170px-Elizabeth_Olsen1_%28cropped%29.jpg'},
    // tslint:disable-next-line:max-line-length
    {username: 'admin5', name: 'Channing Tatum', password: 'admin5', status: 'idle', userImg: 'https://m.media-amazon.com/images/M/MV5BMTc4OTI3Mzg2Nl5BMl5BanBnXkFtZTcwMDAxNTU3OA@@._V1_UX214_CR0,0,214,317_AL_.jpg'}
  ];
  loginUser: IUser = {
    username: 'admin',
    password: 'admin',
    name: 'Charlize Theron',
    status: 'online',
    // tslint:disable-next-line:max-line-length
    userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Charlize_Theron_Cannes_2015_2.jpg/300px-Charlize_Theron_Cannes_2015_2.jpg'
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
