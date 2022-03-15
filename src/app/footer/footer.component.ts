import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import{ GlobalComponent } from '../global-component';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  title = GlobalComponent.appName;
  site = GlobalComponent.appUrl;
  logo = GlobalComponent.appLogo;
  steam = GlobalComponent.appSteam;
  discord = GlobalComponent.appDiscord;
  constructor() { }

  ngOnInit(): void {
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