import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ServersService } from './../../services/servers.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare var ServersData: any;

interface PlayerList {
  id: number,
  name: string;
}

interface ServerRow {
  playerList: PlayerList[]
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  objectKeys = Object.keys;
  
  displayedColumns: string[] = ['id', 'name'];
  
  servers: ServerRow[] = [
    { playerList: [{ id: 0, name: 'Toubi'}] },
    { playerList: [{ id: 0, name: 'Toubi'}] },
    { playerList: [{ id: 0, name: 'Toubi'}] },
    { playerList: [{ id: 0, name: 'Toubi'}] },
    { playerList: [{ id: 0, name: 'Toubi'}] }
  ];

  constructor(private http: HttpClient, public server: ServersService, private sanitizer:DomSanitizer)
  {
    this.GetServers();
  }

  GetServers(){
    this.server.get()
    .subscribe((res)=>{
      this.server.data = res
      var array = this.server.data;
      for (let key = 0; key < array.length; key++)
      {
        this.servers[key].playerList.pop();
        for(let player = 0; player < array[key].PlayersList.length; player++)
        {
          array[key].PlayersList[player].Id;
          array[key].PlayersList[player].Name;
          
          this.servers[key].playerList.push({id: this.server.data[key].PlayersList[player].Id, name: this.server.data[key].PlayersList[player].Name});
        }
      }
    })
  }

  sanitize(url:string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    this.TestJS();
  }

  TestJS(): any
  {
    return console.log(ServersData.TryServer());
  }
}
