import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { AuthService } from 'src/app/auth/service/auth.service';
import { UserUpdatePasswdBody } from '../common/UserUpdatePasswdBody';

import { UserUpdatePasswdService } from '../service/user-update-passwd.service';

@Component({
  selector: 'app-update-passwd',
  templateUrl: './update-passwd.component.html',

  styleUrls: ['./update-passwd.component.css']
})
export class UpdatePasswdComponent implements OnInit {

  token = '';
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
    const oldPasswd = this.validateForm.controls['oldPassword'].value;
    const newPasswd = this.validateForm.controls['newPassword'].value;
    alert(oldPasswd + '\n' + newPasswd);
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
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userUpdatePasswdService: UserUpdatePasswdService
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
    this.token = this.authService.getToken();
  }

  userUpdatePasswd(userUpdatePasswdBody: UserUpdatePasswdBody): void {
    this.userUpdatePasswdService.userUpdatePasswd(userUpdatePasswdBody).subscribe();
  }
}
