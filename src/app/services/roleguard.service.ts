import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.loggedIn())
    {
        if(this.authService.GetUserData("role") === '1')
          return true;
        else
        {
          this.authService.PrintNoAccess();
          return false;
        }
    }
    else
    {
      this.authService.PrintMustBeLoggedIn();
      this.router.navigate(["/"]);
      return false;
    }
  }
}
