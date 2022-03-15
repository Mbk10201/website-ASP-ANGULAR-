import { Title } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SteamService } from 'src/app/services/steam.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit 
{
  constructor(public steam:SteamService, private title: Title) { 
    this.title.setTitle("Admin - Dashboard");
  }

  ngOnInit(): void {
    
  }
}
