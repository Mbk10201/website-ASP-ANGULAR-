import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  stayConnected : boolean = false;

  LoginForm = new FormGroup({
    auth: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  login(): void
  {
    const val = this.LoginForm.value;
    if (val.auth && val.password)
    {
      if(!this.stayConnected)
        this.authService.onlyOnce = true;
      else
        this.authService.onlyOnce = false;
      this.authService.login(val.auth, val.auth, val.auth, val.password);
    }
  }

  CheckBoxStatus(): void
  {
    this.stayConnected = !this.stayConnected;
  }

  ngOnInit(): void {
    this.authService.RedirectIfLogged();
  }

}
