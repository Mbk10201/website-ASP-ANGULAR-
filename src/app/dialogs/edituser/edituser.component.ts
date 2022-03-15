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
  email: string;
  role: string;
  steamid: string;
}

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EdituserComponent implements OnInit {

  confirmtext: string = "";
  panelOpenState = false;
  form: FormGroup = new FormGroup({
    code: new FormControl(''),
  });
  
  constructor(private formBuilder: FormBuilder, 
              public dialogRef: MatDialogRef<EdituserComponent>, 
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

  RemoveUser()
  {
    this.dialogRef.close();
    this.loader.Display("dots", "Suppression...", 5000);

    setTimeout(() => {
      this.user.RemoveUser(this.data.id).subscribe( {
        next: data => 
        {
          this.user.GetAllUsers();
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

  GetEmail(): string
  {
    return this.data.email;
  }

  GetSteamID(): string
  {
    return this.data.steamid;
  }

  GetRole(): string
  {
    return this.authService.GetUserPerm(this.data.role.toString());
  }
}
