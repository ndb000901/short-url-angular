import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AddLinkComponent } from './add-link/add-link.component';
import { DeleteLinkComponent } from './delete-link/delete-link.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkScanResultComponent } from './link-scan-result/link-scan-result.component';
import { MenuComponent } from './menu/menu.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ResetPasswdComponent } from './reset-passwd/reset-passwd.component';
import { UpdateAvatarComponent } from './update-avatar/update-avatar.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdateLinkListComponent } from './update-link-list/update-link-list.component';
import { UpdateNameComponent } from './update-name/update-name.component';
import { UpdatePasswdComponent } from './update-passwd/update-passwd.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { VipInfoComponent } from './vip-info/vip-info.component';
import { MainComponent } from './main/main.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { QRCodeModule } from 'angular2-qrcode';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    AddLinkComponent,
    DeleteLinkComponent,
    LinkListComponent,
    LinkScanResultComponent,
    MenuComponent,
    QrcodeComponent,
    ResetPasswdComponent,
    UpdateAvatarComponent,
    UpdateEmailComponent,
    UpdateLinkListComponent,
    UpdateNameComponent,
    UpdatePasswdComponent,
    UserDetailsComponent,
    VipInfoComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzSwitchModule,
    NzGridModule,
    NzDropDownModule,
    NzAvatarModule,
    NzTableModule,
    NzModalModule,
    NzImageModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzSelectModule,
    NzPopconfirmModule,
    NzUploadModule,
    NzMessageModule,
    QRCodeModule,
    BrowserAnimationsModule,
    FormsModule,

    AuthModule

  ]
})
export class MainModule { }
