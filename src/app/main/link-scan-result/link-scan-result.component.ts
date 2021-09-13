import { Component } from '@angular/core';
import { UrlAddBody } from '../common/UrlAddBody';

@Component({
  selector: 'app-link-scan-result',
  templateUrl: './link-scan-result.component.html'
})
export class LinkScanResultComponent {
  isVisible = false;
  isOkLoading = false;
  data: UrlAddBody = new UrlAddBody();
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
