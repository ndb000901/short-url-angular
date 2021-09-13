import { Component, OnInit } from '@angular/core';
import { UrlGetService } from '../service/url-get.service';
import { Url } from '../common/Url';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UrlUpdateService } from '../service/url-update.service';
import { UrlUpdateBody } from '../common/UrlUpdateBody';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-update-link-list',
  templateUrl: './update-link-list.component.html',
  styleUrls: ['./update-link-list.component.css']
})
export class UpdateLinkListComponent implements OnInit {
  token = '';
  editCache: { [key: number]: { edit: boolean; data: Url } } = {};
  listOfData: Url[] = [];
  constructor(
    private urlGetService: UrlGetService,
    private urlUpdateService: UrlUpdateService,
    private message: NzMessageService,
    private authService: AuthService
  ) {}

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    const urlUpdateBody = new UrlUpdateBody(this.token, this.listOfData[id - 1].surl,
    this.listOfData[id - 1].lurl, this.listOfData[id - 1].alias);
    this.urlUpdateService.updateUrl(urlUpdateBody);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    this.token = this.authService.getToken();
    this.getUrls();
  }

  getUrls(): void {
    this.urlGetService.getUrls(this.token).subscribe(urls => {
      this.listOfData = urls;
      let id = 1;
      for (const url of this.listOfData) {
        url.id = id;
        id++;
      }
      this.updateEditCache();
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

  click(id: number): void {
    alert(id);
  }

}
