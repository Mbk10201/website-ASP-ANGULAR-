import { LoaderService } from './../../../../loader/loader.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleplayService } from '../../../../services/roleplay.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit 
{
  user: any = [];

  constructor(private router: Router, private route: ActivatedRoute, private roleplay: RoleplayService, public Loader: LoaderService) 
  { 
    /*setTimeout(() => {
      this.Loader.isLoading.next(true);
    }, 2500);*/
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => 
      {
        if(params['id'])
        {
          this.roleplay.GetUser(params['id']).subscribe((res) => {
            this.user = res;
            console.log(this.user);
          });
        }
        else
          this.router.navigate(["/error"]);
      }
    );
  }

  GetInfo(type:string)
  {
    if(type === "name")
      return this.user[0].name;
    else if(type === "steamid32")
      return this.user[0].steamid32;
    else if(type === "steamid64") 
      return this.user[0].steamid64;
    else if(type === "model") 
      return this.user[0].model;
    else if(type === "tag") 
      return this.roleplay.GetFinalTag(this.user[0].tag);
    else if(type === "country") 
      return this.user[0].country;
    else if(type === "playerid") 
      return this.user[0].playerid;
    else if(type === "admin") 
      return this.user[0].admin;
    else if(type === "tutorial") 
      return this.user[0].tutorial;
    else if(type === "nationality") 
      return this.user[0].nationality;
    else if(type === "sexe")
    {
      if(this.user[0].sexe === 1)
        return "Homme";
      else if(this.user[0].sexe === 2)
        return "Homme";
      else
        return "Non binaire";
    }
    else if(type === "jobid") 
      return this.user[0].jobid;
    else if(type === "gradeid") 
      return this.user[0].gradeid;
    else if(type === "level") 
      return this.user[0].level;
    else if(type === "xp") 
      return this.user[0].xp;
    else if(type === "money") 
      return this.user[0].money;
    else if(type === "bank") 
      return this.user[0].bank;
    else if(type === "playtime") 
      return this.roleplay.GetPlayTime(this.user[0].playtime);
    else if(type === "viptime") 
      return this.user[0].viptime;
    else if(type === "jobname")
      return this.roleplay.GetActualJob(this.user[0].jobid, this.user[0].gradeid);
  }
}