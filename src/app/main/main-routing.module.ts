import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LinkListComponent } from './link-list/link-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { VipInfoComponent } from './vip-info/vip-info.component';
import { UpdatePasswdComponent } from './update-passwd/update-passwd.component';
import { ResetPasswdComponent } from './reset-passwd/reset-passwd.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdateLinkListComponent } from './update-link-list/update-link-list.component';
import { UpdateNameComponent } from './update-name/update-name.component';
import { UpdateAvatarComponent } from './update-avatar/update-avatar.component';
import { DeleteLinkComponent } from './delete-link/delete-link.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { MainComponent } from './main/main.component';

import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'user/info', pathMatch: 'full'},
      { path: 'linklist', component: LinkListComponent},
      { path: 'vipinfo', component: VipInfoComponent},
      { path: 'user/info', component: UserDetailsComponent},
      { path: 'userinfo/edit/passwd', component: UpdatePasswdComponent},
      { path: 'userinfo/reset/passwd', component: ResetPasswdComponent},
      { path: 'userinfo/edit/email', component: UpdateEmailComponent},
      { path: 'userinfo/edit/name', component: UpdateNameComponent},
      { path: 'userinfo/edit/avatar', component: UpdateAvatarComponent},
      { path: 'linklist/edit', component: UpdateLinkListComponent},
      { path: 'linklist/delete', component: DeleteLinkComponent},
      { path: 'linklist/add', component: AddLinkComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
