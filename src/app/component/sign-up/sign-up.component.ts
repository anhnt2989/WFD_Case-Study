import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: IUser;
  userRegisterForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name: new FormControl('',  Validators.minLength(4)),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  onSubmit() {
    this.newUser = {
      username: this.userRegisterForm.value.username,
      name: this.userRegisterForm.value.name,
      password: this.userRegisterForm.value.password,
      status: 'offline',
      userImg: ''
    };
    this.userService.addtoUserList(this.newUser);
    console.log(this.userService.userList);
    this.router.navigateByUrl('login');
  }

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }
}
