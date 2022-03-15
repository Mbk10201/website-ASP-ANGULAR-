import { LoaderService } from './../../loader/loader.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup} from '@angular/forms';
import * as Notiflix from 'notiflix';

export interface DialogData {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-producteditprice',
  templateUrl: './producteditprice.component.html',
  styleUrls: ['./producteditprice.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProducteditpriceComponent implements OnInit {

  form: FormGroup = new FormGroup({
    content: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<ProducteditpriceComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private productService:ProductService,
    private loader:LoaderService) { }

  ngOnInit(): void {
  }

  Update()
  {
    this.dialogRef.close();
    this.loader.Display("dots", "Modification...", 2500);

    setTimeout(() => {
      this.productService.UpdateProductPrice(this.data.id, this.form.value.content).subscribe( {
        next: data => 
        {
          Notiflix.Notify.success(`Modification du prix de ${this.data.name} (${this.data.price} -> ${this.form.value.content}`);
        },
        error: error => 
        {
          Notiflix.Report.failure(
            'Un problème est survenu',
            "Le serveur est hors-ligne ou bien aucune reponse n'est parvenu.",
            'Réessayer',
          );
        }
      });
    }, 2500);
  }
}
