import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;
  loginInvalid = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login(formData) {
    this.auth
      .loginUser(formData.userName, formData.password)
      .subscribe(response => {
        if (!response) {
          this.loginInvalid = true;
        } else {
          // tslint:disable-next-line:no-unused-expression
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['/events']);
  }
}
