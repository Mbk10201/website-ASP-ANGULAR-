import { ProducteditdescriptionComponent } from './../../dialogs/producteditdescription/producteditdescription.component';
import { ProducteditimageComponent } from './../../dialogs/producteditimage/producteditimage.component';
import { ProducteditcategoryComponent } from './../../dialogs/producteditcategory/producteditcategory.component';
import { ProducteditpriceComponent } from './../../dialogs/producteditprice/producteditprice.component';
import { ProducteditnameComponent } from './../../dialogs/producteditname/producteditname.component';
import { ProductService } from './../../services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { PatchnotesService } from './../../services/patchnotes.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { MatDialog } from '@angular/material/dialog';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-shopconfig',
  templateUrl: './shopconfig.component.html',
  styleUrls: ['./shopconfig.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopconfigComponent implements OnInit 
{
  productlist:any = [];
  objectKeys = Object.keys;
  
  constructor(public patchService:PatchnotesService, public Loader:LoaderService, private authService:AuthService, public productService:ProductService, private dialog: MatDialog) { 
    this.FetchProducts();
  }

  AddForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  FetchProducts()
  {
    this.productService.GetAll().subscribe((res)=>{
      this.productlist = res;
    });
  }

  EditName(id:number, name:string)
  {
    this.dialog.open(ProducteditnameComponent, {
      id: 'editproductname',
      data: {
        id: id,
        name: name
      }
    });
  }

  EditPrice(id:number, name:string, price:number)
  {
    this.dialog.open(ProducteditpriceComponent, {
      id: 'editproductprice',
      data: {
        id: id,
        name: name,
        price: price
      }
    });
  }

  EditCategory(id:number, name:string, category:string)
  {
    this.dialog.open(ProducteditcategoryComponent, {
      id: 'editproductcategory',
      data: {
        id: id,
        name: name,
        category: category
      }
    });
  }

  EditImage(id:number, name:string, image:string)
  {
    this.dialog.open(ProducteditimageComponent, {
      id: 'editproductimage',
      data: {
        id: id,
        name: name,
        image: image
      }
    });
  }

  EditDescription(id:number, name:string, description:string)
  {
    this.dialog.open(ProducteditdescriptionComponent, {
      id: 'editproductdescription',
      data: {
        id: id,
        name: name,
        description: description
      }
    });
  }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_47pyyfcf.json',
  };

}
