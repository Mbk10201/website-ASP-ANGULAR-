import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs, User } from "../models/roleplay";
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class RoleplayService {
  url = `${GlobalComponent.apiUrl}roleplay`;
  jobdata: any[] = [];

  constructor(private http: HttpClient) {}

  GetUsers(): Observable<User> {
    const url = `${this.url}/getusers`;
    return this.http.get<User>(url);
  }

  GetUser(steamid: string): Observable<User> {
    const url = `${this.url}/getuser/${steamid}`;
    return this.http.get<User>(url);
  }

  GetJobs(): Observable<Jobs> {
    const url = `${this.url}/jobs`;
    return this.http.get<Jobs>(url);
  }

  GetActualJob(jobid:number, gradeid:number): string
  {
    let jobIndex = this.jobdata.findIndex(i => i.id === jobid);
    let gradeIndex = gradeid - 1;

    return `${this.jobdata[jobIndex].grades[gradeIndex].grade} - ${this.jobdata[jobIndex].jobname}`;
  }

  GenerateRGB(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgba(" + r + ", " + g + ", " + b + ", 1)";
  }

  GetFinalTag(tag:string): string
  {
    var result = tag.split("}", 2);
    return result[1];
  }

  GetPlayTime(timestamp:number): string
  {
    var jours = timestamp / 86400;
    var heures = timestamp % 86400 / 3600;
    var minutes = timestamp % 86400 % 3600 / 60;
    var secondes = timestamp % 86400 % 3600 / 120;
    var result = "";

    if(timestamp == 0)
      result = `N'as pas encore jouée`;
    else
    {
      if(jours == 0)
      {
        if(heures == 0)
          result = `${minutes} Minutes ${secondes} Secondes`;
        else
          result = `${heures} Heures ${minutes} Minutes ${secondes} Secondes`;
      }
      else
      {
        if(heures == 0) 
          result = `${minutes} Minutes ${secondes} Secondes`;
        else
          result = `${jours} Jours ${heures} Heures ${minutes} Minutes ${secondes} Secondes`;
      }
    }
    
    return result;
  }
}
