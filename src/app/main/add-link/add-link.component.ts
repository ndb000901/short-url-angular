import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { LinkScanResultComponent } from '../link-scan-result/link-scan-result.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UrlAddBody } from '../common/UrlAddBody';
import { UrlAdd } from '../common/UrlAdd';
import { UrlAddService } from '../service/url-add.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit{

  constructor(
    private modalService: NzModalService,
    private urlAddService: UrlAddService,
    private authService: AuthService
    ) {}
  token = '';
  data = new UrlAddBody();
  getData(result: string): void {
    this.loadData(result.split('\n'));
    this.modalService.create({
      nzTitle: '解析结果',
      nzOkText: '提交',
      nzCancelText: '取消',
      // nzFooter: null,
      // nzContent: NzModalCustomFooterComponent
      nzOnOk: () => { this.addUrls(); } ,
      nzContent: LinkScanResultComponent,
      nzComponentParams: {
        data: this.data,
      },
    });
  }

  loadData(list: string[]): void {
    this.data.list.length = 0;
    for (const url of list) {
      const urlAdd = new UrlAdd(url, '');
      this.data.list.push(urlAdd);
    }
    this.data.token = this.token;
  }

  addUrls(): void {
    this.urlAddService.addUrls(this.data).subscribe();
  }

  ngOnInit(): void {
    this.token = this.authService.getToken();
  }

}
