import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit 
{
  objectKeys = Object.keys;
  public list: any[];

  constructor() { 
    this.list = [
      {name: 'MbK', role: 'Technicien', steamurl: 'https://steamcommunity.com/id/xsuprax/', imageurl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/18/18d2fedf1aa23ce16be6cf84ed7277208bad61c4_full.jpg'},
    ]
  }

  ngOnInit(): void {
  }

}
