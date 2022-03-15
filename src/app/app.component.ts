import { NotificationService } from './services/notification.service';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { GlobalComponent } from './global-component';
import { LoaderService } from './loader/loader.service';
import { NewsService } from './services/news.service';
import { PatchnotesService } from './services/patchnotes.service';
import * as Notiflix from 'notiflix';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit
{
  title = GlobalComponent.appName;
  url = GlobalComponent.appUrl;
  logo = GlobalComponent.appLogo;
  favicon = GlobalComponent.appLogoSmall;
  particlesUrl = GlobalComponent.particlesUrl;
  currentRoute: string = "";

  constructor(private http: HttpClient, 
    public Loader:LoaderService, 
    private newsService:NewsService, 
    private patchService:PatchnotesService, 
    private titleService: Title,
    private router: Router,
    private spinner: NgxSpinnerService,
    private notif: NotificationService)
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          console.log('Route change detected');
          this.notif.Info(`Navigation -> <span class='text-info'>${event.url}</span>`);
         
          this.Loader.isLoading.next(true);
          this.spinner.show();
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 700);
      }

      if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          this.currentRoute = event.url;          
          this.Loader.isLoading.next(false);
      }

      if (event instanceof NavigationError) {
           // Hide progress spinner or progress bar

          // Present error to user
          console.log(event.error);
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.http.get("https://api.community-infinity.fr/totalvisits/increase").subscribe();
  }
}