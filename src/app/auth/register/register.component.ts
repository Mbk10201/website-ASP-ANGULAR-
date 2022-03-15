import { AuthService } from './../../services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  CheckBox: boolean = false;
  hide: boolean = true;

  RegisterForm = new FormGroup({
    email: new FormControl(''),
    steamid: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    passwordconfirm: new FormControl(''),
  });

  constructor(private authService: AuthService) { }

  register(): void {
    const val = this.RegisterForm.value;
    if (val.email && val.steamid && val.username && val.password) {
      this.authService.register(val.email, val.steamid, val.username, val.password);
    }
  }

  ngOnInit(): void {
    this.authService.RedirectIfLogged();
  }

}
