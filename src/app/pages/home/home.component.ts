import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoaderService } from '../../loader/loader.service';
import { PatchnotesService } from '../../services/patchnotes.service';
import { NewsService } from '../../services/news.service';
import { ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GlobalComponent } from '../../global-component';
import { AnimationOptions } from 'ngx-lottie';
import * as Notiflix from 'notiflix';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { iPatch, iNew } from '../../models/informations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnDestroy, OnInit 
{
  logo = GlobalComponent.appLogo;
  steam = GlobalComponent.appSteam;
  slogan = GlobalComponent.appSlogan;
  discord = GlobalComponent.appDiscord;
  headerimage = GlobalComponent.appHomeHeader;
  news: any = [];
  patchnotes: any = [];
  latestuser: any = [];
  latestban: any = [];
  latestbanDate: string = "";
  bannerurl: string = "";
  
  /* PAGINATOR CONSTRUCTORS */
  @ViewChild('newsPaginator', { read: MatPaginator }) newsPaginator: MatPaginator;
  @ViewChild('patchPaginator', { read: MatPaginator }) patchPaginator: MatPaginator;


  patchObs: Observable<any>;
  newsObs: Observable<any>;
  dataSourcePatch: MatTableDataSource<iPatch> = new MatTableDataSource<iPatch>();
  dataSourceNew: MatTableDataSource<iNew> = new MatTableDataSource<iNew>();
  /* PAGINATOR CONSTRUCTORS */

  slides = [{'image': '../../assets/images/slider/1.jpg'}, 
            {'image': '../../assets/images/slider/2.jpg'},
            {'image': '../../assets/images/slider/3.jpg'}, 
            {'image': '../../assets/images/slider/4.jpg'}, 
            { 'image': '../../assets/images/slider/5.gif' }];

  banners = ["../../assets/images/banners/1.jpg", "../../assets/images/banners/2.jpg"];
 
  constructor(
    private authService: AuthService, 
    public newsService: NewsService, 
    public patchService: PatchnotesService, 
    public Loader: LoaderService, 
    private user: UserService, 
    private route: ActivatedRoute, 
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef) 
  {
    this.user.GetLatestUser().subscribe((res) => {
      this.latestuser = res;
    });

    this.user.GetLatestBan().subscribe((res) =>{
      this.latestban = res;
      this.latestbanDate = new Date(this.latestban[0].time*1000).toLocaleDateString("fr");
    });

    this.route.queryParams
      .subscribe(params => {
        if(params['code'])
        {
          this.authService.ConfirmCode(params['code']).subscribe({
            next: () => 
            {
              if(this.authService.loggedIn())
              {
                this.authService.logOut();
                Notiflix.Report.info(
                  'Veuillez-vous reconnecter',
                  'Votre email a été confirmée, suite à cela une reconnexion est nécessaire',
                  'C\'est parti !',
                );
              }
              else
              {
                Notiflix.Report.success(
                  'Confirmation',
                  'Votre email a été confirmée !',
                  'Valider',
                );
              }
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
        }
      }
    );

    this.bannerurl = this.GetRandomBanner();
  }

  /*          OnPage initialise         */
  ngOnInit(): void {

    this.newsService.Get().subscribe(data =>{
      this.news = data;
      this.dataSourceNew.data = data;
    });

    this.patchService.Get().subscribe(data =>{
      this.patchnotes = data;
      this.dataSourcePatch.data = data;
    });

    
    this.changeDetectorRef.detectChanges();
    
    this.dataSourceNew.paginator = this.newsPaginator;
    this.newsObs = this.dataSourceNew.connect();
    
    this.dataSourcePatch.paginator = this.patchPaginator;
    this.patchObs = this.dataSourcePatch.connect();
    
  }

  ngOnDestroy(): void {
    if (this.dataSourcePatch) { 
      this.dataSourcePatch.disconnect(); 
    }
    if (this.dataSourceNew) { 
      this.dataSourceNew.disconnect(); 
    }
  }

  GoProfile(steamid:string): void
  {
    this.router.navigate(['/profil'], { queryParams: { id: steamid } });
  }

  GetRandomBanner(): string
  {
    var random = this.banners[Math.floor(Math.random() * this.banners.length)];
    return random.toString();
  }

  discordJson: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/packages/lf20_ygq6u6mb.json',
  };

  enemydownJson: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/packages/lf20_kxfj9xjw.json',
  };
}
