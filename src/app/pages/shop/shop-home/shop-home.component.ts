import { ProductService } from './../../../services/product.service';
import { AuthService } from './../../../services/auth.service';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Notiflix from 'notiflix';

export interface DialogData {
  title: '';
  description: '';
}

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomeComponent implements OnInit 
{
  ProductList: any = [];
  objectKeys = Object.keys;
  constructor(public dialog: MatDialog, private cart:CartService, public auth: AuthService, public product:ProductService){}

  ngOnInit(): void {
    this.product.GetProductByCategory("home").subscribe((res)=>{
      this.ProductList = res;
    });
  }

  OpenInformation(title:string, description:string) {
    this.dialog.open(InfoDialog, {
      data: {
        title: title,
        description: description,
      },
    });
  }

  AddToCart(userid:number, productid:number, quantity:number, name:string)
  {
    Notiflix.Loading.circle('Ajout au panier de ' + name + '...');
    setTimeout (() => {
      this.cart.Add(userid, productid, quantity).subscribe((res) => {
        this.cart.producttotal++;
        Notiflix.Loading.remove();
      });
    }, 2000);
  }
}

@Component({
  selector: 'information-dialog',
  templateUrl: 'information-dialog.html',
})
export class InfoDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}