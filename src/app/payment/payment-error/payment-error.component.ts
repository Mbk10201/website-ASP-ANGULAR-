import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-payment-error',
  templateUrl: './payment-error.component.html',
  styleUrls: ['./payment-error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_Dum1s3.json',
  };
}
