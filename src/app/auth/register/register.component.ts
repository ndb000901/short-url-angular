import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { RegisterService } from '../service/register.service';
import { RegisterBody } from '../common/RegisterBody';
import { RegisterResponseBody } from '../common/RegisterResponseBody';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const email = this.validateForm.controls['email'].value;
    const passwd = this.validateForm.controls['password'].value;
    const user_name = this.validateForm.controls['nickname'].value;
    const captcha = this.validateForm.controls['captcha'].value;
    alert(email + '\n' + passwd + '\n' + user_name + '\n' + captcha);

    if (email != null && passwd != null && user_name != null && captcha != null) {
      const registerBody = new RegisterBody(email, passwd, user_name, captcha);
      this.register(registerBody);
      
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }


  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
    const email = this.validateForm.controls['email'].value;
    if (email == null) {
      this.createMessageByEmailEmpty();
      return;
    }

    this.registerService.getCaptcha(email).subscribe(
      registerResponseBody => {
        if (registerResponseBody.code === 1001) {
          this.createMessageByEmailUsed();
          return;
        }
        // alert(registerResponseBody.code);
      });
    this.createMessageByGetCaptchaOk();
    }



  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private message: NzMessageService,
    private router: Router
   ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }

  register(register: RegisterBody): void {
    this.registerService.register(register).subscribe(
      registerResponseBody => {
        if (registerResponseBody.code === 1000) {
          this.createMessageByRegisterSuccess();
          this.router.navigate(['login']);
        }
      }
    );
  }

  createMessageByEmailEmpty(): void {
    this.message.create('error', '邮箱不可为空');
  }

  createMessageByGetCaptchaOk(): void {
    this.message.create('success', '已发送验证码');
  }

  createMessageByEmailUsed(): void {
    this.message.create('error', '邮箱已注册');
  }
  createMessageByCaptchaError(): void {
    this.message.create('error', '验证码错误');
  }
  createMessageByRegisterSuccess(): void {
    this.message.create('success', '注册成功');
  }
}

