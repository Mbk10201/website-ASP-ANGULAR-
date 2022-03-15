import { LoaderService } from './../../loader/loader.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SteamService } from 'src/app/services/steam.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as Notiflix from 'notiflix';
import{ GlobalComponent } from '../../global-component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit 
{
  data:any = [];
  particlesUrl = GlobalComponent.particlesUrl;
  
  constructor(public authService:AuthService, private route: ActivatedRoute, private steam:SteamService, private router: Router, private user:UserService, public Loader:LoaderService) 
  { 
    this.route.queryParams
      .subscribe(params => {
        if(params['id'])
        {
          var find_object = this.user.GlobalUsers.find((x:any) => x.steamid === params['id']);
          this.user.username = find_object.username;
          this.user.email = find_object.email;
          this.user.role = find_object.role;
          this.user.steamid64 = find_object.steamid;
          this.user.steamid32 = this.steam.ConvertTo32(find_object.steamid);
          this.user.creationdate = find_object.steamdata[0].CreationDate;
          this.user.avatar = find_object.steamdata[0].AvatarFull;
          this.user.playinggame = find_object.steamdata[0].PlayingGameName;
        }
        else
          this.router.navigate(["/error"]);
      }
    );
  }

  ngOnInit(): void 
  {
  }

  GetUsername(): string
  {
    return this.user.username;
  }

  GetEmail(): string
  {
    return this.user.email;
  }

  GetRole(): string
  {
    return this.authService.GetUserPerm(this.user.role.toString());
  }

  GetSteamID64(): string
  {
    return this.user.steamid64;
  }

  GetSteamID32(): string
  {
    return this.user.steamid32;
  }

  GetCreationDate(): string
  {
    return this.user.creationdate;
  }

  GetAvatar(): string
  {
    return this.user.avatar;
  }

  GetPlayingGame(): string
  {
    return this.user.playinggame;
  }
}
