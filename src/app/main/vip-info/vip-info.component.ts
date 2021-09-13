import { Component, OnInit } from '@angular/core';

interface VipInfo {
  type: string;
  price: number[];
  max: number;
}
@Component({
  selector: 'app-vip-info',
  templateUrl: './vip-info.component.html',
  styleUrls: ['./vip-info.component.css']
})
export class VipInfoComponent implements OnInit {

  vips: VipInfo[] = [
  {
    type: '免费用户',
    price: [0, 0, 0],
    max: 100

  },
  {
    type: '普通会员',
    price: [15, 40, 129],
    max: 500
  },
  {
    type: '超级会员',
    price: [29, 75, 219],
    max: 1000
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
