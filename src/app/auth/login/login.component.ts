import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginBody } from '../common/LoginBody';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { Token } from '../common/Token';
import { Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  // token: Token;
  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const email = this.validateForm.controls['userName'].value;
    const passwd = this.validateForm.controls['password'].value;
    if (email != null && passwd != null) {
      alert(email + '\n' + passwd);
      this.login(email, passwd);
    }


  }



  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  login(email: string, passwd: string): void {
    const loginBody = new LoginBody(email, passwd);
    this.loginService.login(loginBody).subscribe(
      token => {
        // this.token = token;
        alert(token.token);
        if (token.token == null) {
          this.createMessage();
          return;
        }

        this.authService.setToken(token.token);
        this.router.navigate(['main']);
      }
    );
  }

  createMessage(): void {
    this.message.error('邮箱或密码错误');
  }
}
