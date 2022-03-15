import { ThemeService } from './../services/theme.service';
import { CartService } from './../services/cart.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../global-component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ShopCartComponent } from '../pages/shop/shop-cart/shop-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  title = GlobalComponent.appName;
  logo = GlobalComponent.appLogoSmall;
  profileUrl:string = "";
  isDarkMode: boolean;

  constructor(public authService: AuthService, private router: Router, public dialog: MatDialog, public cart:CartService, public theme: ThemeService, private themeService: ThemeService) 
  {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }
  
  ngOnInit(): void {
    if(this.authService.loggedIn())
    {
      var temp: any = [];
      this.cart.Get(this.authService.GetUserData("id"), this.authService.GetUserData("token")).subscribe((res) => {
        temp = res;
        this.cart.producttotal = temp.length;
      });
    }
  }

  GoProfile()
  {
    this.router.navigate(['/profil'], { queryParams: { id: this.authService.GetUserData("steamid") } });
  }

  OpenShoppingCart()
  {
    this.dialog.open(ShopCartComponent, {
      id: 'cart',
    });
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }
}