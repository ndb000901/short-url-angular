import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../common/UserInfo';
import { UserInfoService } from '../service/user-info.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  strs: string[] = ['200', '300', '普通会员', 'user@mail.wuhen.xyz'];
  constructor(
    private userInfoService: UserInfoService,
    private authService: AuthService
    ) { }
  user: UserInfo[] = [];
  // user: UserInfo;
  // user: UserInfo = {
  //   'user_name': 'null',
  //   'email': 'null',
  //   'created_datetime': 'null',
  //   'vip_datetime': 'null',
  //   'current_url_num': 0,
  //   'vip_name': 'null',
  //   'max': 0
  // };
  token = '';
  ngOnInit(): void {
    this.token = this.authService.getToken();
    this.getInfo();
  }

  getInfo() {
    this.userInfoService.getUserInfo(this.token).subscribe(user => this.user = user);
  }


}
