import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: IUser;
  userRegisterForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.newUser = {
      username: this.userRegisterForm.controls.username.value,
      name: this.userRegisterForm.controls.name.value,
      password: this.userRegisterForm.controls.password.value,
      status: 'offline',
      userImg: ''
    };
    this.userService.addtoUserList(this.newUser);
    console.log(this.userService.userList);
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}

