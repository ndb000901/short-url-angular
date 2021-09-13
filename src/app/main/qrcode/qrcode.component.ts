/* declarations: NzModalCustomFooterComponent */

import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styles: []
})
export class QrcodeComponent {
  data: string;

  isVisible = false;
  isConfirmLoading = false;

  constructor(private modalService: NzModalService) {}

  // showModal1(): void {
  //   this.isVisible = true;
  // }

  showModal2(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      // nzContent: NzModalCustomFooterComponent
      nzContent: QrcodeComponent
    });
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
