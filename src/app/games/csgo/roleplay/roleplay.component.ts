import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { RoleplayService } from './../../../services/roleplay.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roleplay',
  templateUrl: './roleplay.component.html',
  styleUrls: ['./roleplay.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleplayComponent implements OnInit {

  constructor(public roleplay:RoleplayService, public authService:AuthService, private router: Router) { 
    this.roleplay.GetJobs().subscribe(data => {
      //this.roleplay.jobdata = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  GoProfile(steamid: string) {
    this.router.navigate(['/csgo/roleplay/profil'], { queryParams: { id: steamid } });
  }
}
