import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_47pyyfcf.json',
  };
}
