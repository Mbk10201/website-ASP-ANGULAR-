import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-loading',
  templateUrl: './payment-loading.component.html',
  styleUrls: ['./payment-loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaymentLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
