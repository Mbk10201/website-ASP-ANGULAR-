import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-http404',
  templateUrl: './http404.component.html',
  styleUrls: ['./http404.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Http404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/temp/lf20_0txt7u.json',
  };

}
