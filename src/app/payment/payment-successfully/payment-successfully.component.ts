import { AnimationOptions } from 'ngx-lottie';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-successfully',
  templateUrl: './payment-successfully.component.html',
  styleUrls: ['./payment-successfully.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSuccessfullyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/packages/lf20_7W0ppe.json',
  };
}
