import { LoaderService } from 'src/app/loader/loader.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import * as Notiflix from 'notiflix';

export interface DialogData {
  id: number;
  name: string;
  banned: number;
  key: number;
}

interface Raisons {
  value: string;
  viewValue: string;
}

interface Time {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-banuser',
  templateUrl: './banuser.component.html',
  styleUrls: ['./banuser.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BanuserComponent implements OnInit 
{
  confirmtext: string = "";
  raisonControl = new FormControl('', Validators.required);
  timeControl = new FormControl('', Validators.required);
  form: FormGroup = new FormGroup({
    code: new FormControl(''),
  });

  raisons: Raisons[] = [
    {value: 'insulte', viewValue: 'Insulte'},
    {value: 'harcelement', viewValue: 'Harcèlement'},
    {value: 'abus', viewValue: 'Abus (Use BUG/...)'},
    {value: 'racisme', viewValue: 'Racisme'},
    {value: 'respect', viewValue: 'Manque de respect'},
  ];

  times: Time[] = [
    {value: -1, viewValue: 'Permanent'},
    {value: 3600, viewValue: '1 Heure'},
    {value: 7200, viewValue: '2 Heures'},
    {value: 10800, viewValue: '3 Heures'},
    {value: 14400, viewValue: '4 Heures'},
    {value: 18000, viewValue: '5 Heures'},
    {value: 36000, viewValue: '10 Heures'},
    {value: 54000, viewValue: '15 Heures'},
    {value: 86400, viewValue: '1 Jour'},
    {value: 432000, viewValue: '5 Jours'},
    {value: 604800, viewValue: '1 Semaine'},
  ];
  
  constructor(private formBuilder: FormBuilder, 
              public dialogRef: MatDialogRef<BanuserComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: DialogData, 
              public authService: AuthService, 
              private user: UserService,
              private loader: LoaderService,
  ) {
    this.confirmtext = this.authService.GetRandomString(5);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        code: ['', Validators.required],
      },
      {
        validators: [Validation.FormValueMatch('code', this.confirmtext)]
      }
    );
  }

  BanUser(user:number, admin:number, raison:string, name:string)
  {
    this.dialogRef.close();
    this.loader.Display("dots", "Bannissement...", 5000);

    const timestamp = this.timeControl.value + Math.round(+new Date()/1000);

    setTimeout(() => {
      this.user.BanUser(user, admin, timestamp, raison).subscribe( {
        next: data => 
        {
          Notiflix.Notify.success('Vous avez banni ' + name + ' pour ' + raison);
          this.user.GlobalUsers[this.data.key].banned = 1;
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
    }, 5000);
  }

  UnbanUser(user:number, name:string)
  {
    this.dialogRef.close();
    this.loader.Display("dots", "Débannissement...", 5000);

    setTimeout(() => {
      this.user.UnbanUser(user).subscribe( {
        next: data => 
        {
          Notiflix.Notify.success('Vous avez débanni ' + name);
          this.user.GlobalUsers[this.data.key].banned = 0;
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
    }, 5000);
  }
}
