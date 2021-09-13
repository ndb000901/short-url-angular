import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { HttpClientModule } from '@angular/common/http';

// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { NzSwitchModule } from 'ng-zorro-antd/switch';
// import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
// import { NzAvatarModule } from 'ng-zorro-antd/avatar';
// import { NzTableModule } from 'ng-zorro-antd/table';
// import { NzModalModule } from 'ng-zorro-antd/modal';
// import { NzImageModule } from 'ng-zorro-antd/image';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
// import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
// import { NzUploadModule } from 'ng-zorro-antd/upload';
// import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ForgetPasswdComponent } from './forget-passwd/forget-passwd.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswdComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzSelectModule,
    HttpClientModule,
    NzMessageModule
  ]
})
export class AuthModule { }
