import { ShopCheckoutComponent } from './../shop-checkout/shop-checkout.component';
import { AuthService } from './../../../services/auth.service';
import { CartService } from './../../../services/cart.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent {
  pricetotal: number = 0;
  ProductList: any = [];
  objectKeys = Object.keys;

  constructor(private cart:CartService, public auth: AuthService, public dialog: MatDialog)
  {
    this.GetCart();
  }

  Checkout()
  {
    this.dialog.open(ShopCheckoutComponent, {
      id: 'cartcheckout',
      disableClose: true,
      height: '512px',
      width: '1024px',
    });
  }

  GetCart()
  {
    this.ProductList = [];
    this.pricetotal = 0;
    this.cart.Get(this.auth.GetUserData("id"), this.auth.GetUserData("token")).subscribe((res) => {
        this.ProductList = res;
        this.GetSubTotal();
      }
    );
  }

  Update(userid:number, productid:number, quantity:number)
  {
    this.cart.UpdateQuantity(userid, productid, quantity).subscribe((res) => {
        this.GetCart();
        Notiflix.Notify.success('Quantitée mit à jour.');
      }
    );
  }

  EmptyCart(userid: number)
  {
    this.cart.EmptyCart(userid).subscribe((res) => {
        Notiflix.Notify.success('Vous avez vider votre panier.');
        this.ProductList = [];
        this.cart.producttotal = 0;
      }
    );
  }

  RemoveProduct(userid: number, productid: number)
  {
    this.cart.RemoveProduct(userid, productid).subscribe((res) => {
        this.GetCart();
        this.cart.producttotal--;
        Notiflix.Notify.success('Vous avez supprimer un produit de votre panier.');
      }
    );
  }

  GetSubTotal()
  {
    for (let key = 0; key < this.ProductList.length; key++)
    {
      this.pricetotal += this.ProductList[key].price;
    }
  }
}
