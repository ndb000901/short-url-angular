import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { QrcodeComponent } from '../qrcode/qrcode.component';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UrlGetService } from '../service/url-get.service';
import { Url } from '../common/Url';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AuthService } from 'src/app/auth/service/auth.service';



@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html'
})
export class LinkListComponent implements OnInit {

  token = '';
  urls: Url[] = [];
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: ReadonlyArray<Url> = [];
  listOfData: ReadonlyArray<Url> = [];
  setOfCheckedId = new Set<number>();

  qrcode: QrcodeComponent = new QrcodeComponent(this.modal);

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: ReadonlyArray<Url>): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnInit(): void {
    this.token = this.authService.getToken();
    this.getUrls();

  }
  constructor(
    private modal: NzModalService,
    private urlGetService: UrlGetService,
    private message: NzMessageService,
    private authService: AuthService
    ) {}
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '是否删除该记录？',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: '是',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: '否',
      nzOnCancel: () => console.log('Cancel')
    });
}
  showHaha(surl: string): void {
    this.modal.create({
      nzTitle: '二维码',
      nzWidth: '400px',
      // nzContent: NzModalCustomFooterComponent
      nzContent: QrcodeComponent,
      // nzContent: UserDetailsComponent
      nzComponentParams: {
        data: surl
      },
    });
  }

  getUrls(): void {
    this.urlGetService.getUrls(this.token).subscribe(urls => {
      this.urls = urls;
      let id = 1;
      for (const url of this.urls) {
        url.id = id;
        id++;
      }
    });
  }

  copyMessage(val: string): void{
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.createMessage('success');
  }

  createMessage(type: string): void {
    this.message.create(type, '复制成功');
  }
}
