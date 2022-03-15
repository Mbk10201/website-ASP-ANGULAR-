import { Observable } from 'rxjs';
import { GlobalComponent } from '../global-component';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SteamService } from './steam.service';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  helper = new JwtHelperService();
  onlyOnce: boolean = true;
  method:Storage = localStorage;
  url = `${GlobalComponent.apiUrl}auth`;

  constructor(private http: HttpClient, private router: Router, private steamService: SteamService, private user: UserService) {}

  login(email:string, steamid:string, username:string, password:string): void
  {
    var genString = this.GetRandomString(5);
    Notiflix.Confirm.init({
      plainText: false,
      cancelButtonBackground: '#B60000',
      messageMaxLength: 512
    }),
    Notiflix.Confirm.ask(
      'Anti-Bot',
      '<img src="../../assets/images/bot.png"><br>Confirmez ci-dessous <span class="text-danger user-select-none">' + genString + '</span>',
      genString,
      'Confirmer',
      'Annuler',
      () => {
        const url = `${this.url}/login`
        this.http.post(url, {email, steamid, username, password}, { responseType: 'json' }).subscribe({
          next: data => 
          {
            var jsonObj:any = data;
            Notiflix.Notify.success('Connexion avec succès !');
            this.StoreUserData(jsonObj[0].token);
          },
          error: error => 
          {
            Notiflix.Report.failure(
              'Un problème est survenu',
              error.error,
              'Réessayer',
            );
          }
        });
      },
      () => {
        Notiflix.Notify.failure('Vous devez confirmer l\'anti-bot afin de vous connecter');
      }
    );
  }

  register(email:string, steamid:string, username:string, password:string): void
  {
    var genString = this.GetRandomString(5);
    Notiflix.Confirm.init({
      plainText: false,
      cancelButtonBackground: '#B60000',
      messageMaxLength: 256
    }),
    Notiflix.Confirm.ask(
      'Anti-Bot',
      '<img src="../../assets/images/bot.png"><br>Confirmez ci-dessous <span class="text-danger user-select-none">' + genString + '</span>',
      genString,
      'Confirmer',
      'Annuler',
      () => {
        const url = `${this.url}/register`
        this.http.post(url, {email, steamid, username, password}, { responseType: 'text' }).subscribe({
          next: data => 
          {
            Notiflix.Notify.success('Votre compte a été crée !');
            this.router.navigate(["/login"]);
          },
          error: error => 
          {
            Notiflix.Report.failure(
              'Un problème est survenu',
              error.error,
              'Réessayer',
            );
          }
        });
      },
      () => {
        Notiflix.Notify.failure(`Vous devez confirmer l'anti-bot afin de vous inscrire`);
      }
    );
  }

  logOut(): void {
    this.method.clear();
    Notiflix.Notify.success('Déconnection avec succès !');
    this.router.navigate(["/login"]);
  }

  loggedIn(): boolean {
    let token: any = this.method.getItem('token');
    if (token == null)
      token = undefined;

    if(this.helper.isTokenExpired(token))
      return false;
    else
      return true;
  }

  PrintNoAccess(): void
  {
    Notiflix.Report.failure(
      'Accès réfusé',
      'Vous n\'avez pas les privilèges nécessaires pour accéder à cette page !',
      'J\'ai compris',
    );
  }

  PrintMustBeLoggedIn(): void
  {
    Notiflix.Report.failure(
      'Accès résérvé aux membres',
      'Vous devez vous connecter',
      'J\'ai compris',
    );
  }

  RedirectIfLogged(): boolean
  {
    if(this.loggedIn())
    {
      this.router.navigate(["/"]);
      return true;
    }

    return false;
  }

  StoreUserData(data:string): void
  {
    if(this.onlyOnce)
      this.method = sessionStorage;
    
    this.method.setItem("token", data);
    const decodedToken = this.helper.decodeToken(data);

    this.user.GetUserBySteamID(decodedToken.steamid)
    .subscribe((res)=>{
      var data:any = res;
      var steaminfo:any = data[0].steamdata;
      this.method.setItem("profileurl", steaminfo[0].ProfileUrl);
      this.method.setItem("avatar", steaminfo[0].Avatar);
      this.method.setItem("avatarmedium", steaminfo[0].AvatarMedium);
      this.method.setItem("avatarfull", steaminfo[0].AvatarFull);
      this.method.setItem("userstatus", steaminfo[0].UserStatus);
      this.method.setItem("realname", steaminfo[0].RealName);
      this.method.setItem("primarygroupid", steaminfo[0].PrimaryGroupId);
      this.method.setItem("accountdate", steaminfo[0].AccountCreatedDate);
      this.method.setItem("country", steaminfo[0].CountryCode);
      this.method.setItem("playinggame", steaminfo[0].PlayingGameName);
      this.method.setItem("playinggameid", steaminfo[0].PlayingGameId);
      this.method.setItem("playingserverip", steaminfo[0].PlayingGameServerIP);
    })

    this.router.navigate(['/profil'], { queryParams: { id: decodedToken.steamid } });
  }

  RefreshData(): void
  {
    this.user.GetUserBySteamID(this.GetUserData("steamid"))
    .subscribe((res)=>{
      var data:any = res;
      var steaminfo:any = data[0].steamdata;
      this.method.setItem("profileurl", steaminfo[0].ProfileUrl);
      this.method.setItem("avatar", steaminfo[0].Avatar);
      this.method.setItem("avatarmedium", steaminfo[0].AvatarMedium);
      this.method.setItem("avatarfull", steaminfo[0].AvatarFull);
      this.method.setItem("userstatus", steaminfo[0].UserStatus);
      this.method.setItem("realname", steaminfo[0].RealName);
      this.method.setItem("primarygroupid", steaminfo[0].PrimaryGroupId);
      this.method.setItem("accountdate", steaminfo[0].AccountCreatedDate);
      this.method.setItem("country", steaminfo[0].CountryCode);
      this.method.setItem("playinggame", steaminfo[0].PlayingGameName);
      this.method.setItem("playinggameid", steaminfo[0].PlayingGameId);
      this.method.setItem("playingserverip", steaminfo[0].PlayingGameServerIP);

      Notiflix.Notify.success('Vos données steam ont été rechargé.');
    })
  }

  GetRandomString(size: number = 5): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < size; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  GetUserData(key:string): any
  {
    let value: any;
    var token: any;

    if(key === "id")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = token.id;
    }
    else if(key === "username")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = token.username;
    }
    else if(key === "steamid")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = token.steamid;
    }
    else if(key === "email")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = token.email;
    }
    else if(key === "role")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = token.role;
    }
    else if(key === "steamid32")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = this.steamService.ConvertTo32(token.steamid);
    }
    else if(key === "mail_confirmed")
    {
      token = this.helper.decodeToken(this.GetUserData("token"));
      value = token.mail_confirmed;
    }
    else
    {
      value = this.method.getItem(key);
    }
    if (value == null)
      value = undefined;
    return value;
  }

  GetUserPerm(idrole:string): string
  {
    if(idrole === "1")
      return "Administrateur";
    else if(idrole === "2")
      return "Modérateur";
    else 
      return "Membre";
  }

  ConfirmCode(code:string): Observable<any>
  {
    const url = `${this.url}/confirm/${code}`;
    return this.http.get(url);
  }

  CheckIfConfirmed(user:number): void
  {
    const url = `${this.url}/confirm/isconfirmed/${user}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: data => 
      {
        if(data === "1")
        {
          this.logOut();
          Notiflix.Report.info(
            'Veuillez-vous reconnecter',
            'Votre email a été confirmée, suite à cela une reconnexion est nécessaire',
            'C\'est parti !',
          );
        }
      },
      error: error => {}
    });
  }
}