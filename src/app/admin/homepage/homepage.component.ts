import { AuthService } from '../../services/auth.service';
import { NewsService } from '../../services/news.service';
import { PatchnotesService } from './../../services/patchnotes.service';
import { UserService } from '../../services/user.service';
import { RemoveuserComponent } from './../../dialogs/removeuser/removeuser.component';
import { EdituserComponent } from './../../dialogs/edituser/edituser.component';
import { BanuserComponent } from './../../dialogs/banuser/banuser.component';
import { MatDialog } from '@angular/material/dialog';
import { LoaderService } from './../../loader/loader.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import * as Notiflix from 'notiflix';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit 
{
  objectKeys = Object.keys;
  news: any = [];
  patchnotes: any = [];
  constructor(
    private authService: AuthService,
    public user: UserService, 
    public Loader:LoaderService, 
    private dialog: MatDialog, 
    public patchService: PatchnotesService, 
    public newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsService.Get().subscribe(data => {
      this.news = data;
    });

    this.patchService.Get().subscribe(data => {
      this.patchnotes = data;
    })
  }

  options: AnimationOptions = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_ipupvh25.json',
  };

  BanUser(id:number, name:string, banned:number, key:string)
  {
    if(id != parseInt(this.authService.GetUserData("id")))
    {
      const ref = this.dialog.open(BanuserComponent, {
        id: 'banuser',
        data: {
          id: id,
          name: name,
          banned: banned,
          key: parseInt(key),
        }
      });
    }
    else {
      Notiflix.Report.failure(
        'Un problème est survenu',
        'Vous ne pouvez pas vous bannir vous même',
        'Ok',
      );
    }
  }

  EditUser(id:number, name:string, email:string, role:string, steamid:string)
  {
    const ref = this.dialog.open(EdituserComponent, {
      id: 'banuser',
      data: {
        id: id,
        name: name,
        email: email,
        role: role,
        steamid: steamid,
      }
    });
  }

  RemoveUser(id:number, name:string)
  {
    if(id != parseInt(this.authService.GetUserData("id")))
    {
      const ref = this.dialog.open(RemoveuserComponent, {
        id: 'banuser',
        data: {
          id: id,
          name: name,
        }
      });
    }
    else {
      Notiflix.Report.failure(
        'Un problème est survenu',
        'Vous ne pouvez pas vous supprimer vous même',
        'Ok',
      );
    }
  }
}
