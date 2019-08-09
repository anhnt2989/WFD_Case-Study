import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router, Routes} from '@angular/router';
import {Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: IUser;
  loginStatus: boolean;
  loginAttempt: boolean;
  loginUserForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name: new FormControl('', Validators.minLength(4)),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  onSubmit(): void {
    this.loginAttempt = true;
    this.user = {
      username: this.loginUserForm.value.username,
      password: this.loginUserForm.value.password,
      name: this.loginUserForm.value.name,
      status: 'offline',
      userImg: ''
    };
    if (this.userService.login(this.user)) {
      this.router.navigateByUrl('chat');
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }

  }

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

}
