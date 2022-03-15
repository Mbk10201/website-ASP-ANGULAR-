import { PaymentErrorComponent } from './../../../payment/payment-error/payment-error.component';
import { PaymentSuccessfullyComponent } from './../../../payment/payment-successfully/payment-successfully.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import * as Notiflix from 'notiflix';
import { ShopCartComponent } from '../shop-cart/shop-cart.component';

interface Methods {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shop-checkout',
  templateUrl: './shop-checkout.component.html',
  styleUrls: ['./shop-checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCheckoutComponent implements OnInit 
{
  firstFormGroup: FormGroup;
  selectedValue: string = "";
  public payPalConfig?: IPayPalConfig;

  paymentmethods: Methods[] = [
    {value: 'PayPal', viewValue: 'PayPal'},
    {value: 'Paysafecard', viewValue: 'Paysafecard'},
  ];
  
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder) 
  {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initConfig();
  }

  private initConfig(): void 
  {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        this.ShowLoading();
      },
      onClientAuthorization: (data) => {
        setTimeout(() => {
          this.ShowSuccess();
        }, 1000);
      },
      onCancel: (data, actions) => {
        this.ShowError();
      },
      onError: err => {
        this.ShowError();
      },
    };
  }

  ShowError()
  {
    const diag = this.dialog.open(PaymentErrorComponent);
    setTimeout(() => {
      diag.close();
      this.CloseThisDialog();
    }, 1500);
  }

  CloseThisDialog()
  {
    const cartcheckout = this.dialog.getDialogById('cartcheckout');
    if(cartcheckout)
    cartcheckout.close();
  }

  ShowSuccess()
  {
    const cartcheckout = this.dialog.getDialogById('cartcheckout');
    if(cartcheckout)
    cartcheckout.close();

    const cart = this.dialog.getDialogById('cart');
    if(cart)
      cart.close();
    
      const diag = this.dialog.open(PaymentSuccessfullyComponent);
    setTimeout(() => {
      diag.close();
    }, 1500);
  }

  ShowLoading()
  {
    Notiflix.Loading.dots();
    Notiflix.Loading.remove(2000);
  }

  mastercard: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/private_files/lf30_96M3FI.json',
  };

  paypal: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_nyypcf7y.json',
  };

  visa: AnimationOptions = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_OmhZtA.json',
  };

}
