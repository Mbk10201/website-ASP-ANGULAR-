import { LoaderService } from './../../loader/loader.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup} from '@angular/forms';
import * as Notiflix from 'notiflix';

export interface DialogData {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-producteditimage',
  templateUrl: './producteditimage.component.html',
  styleUrls: ['./producteditimage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProducteditimageComponent implements OnInit 
{
  form: FormGroup = new FormGroup({
    content: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<ProducteditimageComponent>, 
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
      this.productService.UpdateProductImage(this.data.id, this.form.value.content).subscribe( {
        next: data => 
        {
          Notiflix.Notify.success(`Modification de l'image de ${this.data.name} (${this.data.image} -> ${this.form.value.content})`);
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
