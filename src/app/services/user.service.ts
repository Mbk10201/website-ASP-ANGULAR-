import { findIndex, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username:string = "";
  email:string = "";
  role:string = "";
  steamid64:string = "";
  steamid32:string = "";
  creationdate:string = "";
  avatar:string = "";
  playinggame:string = "";
  url = `${GlobalComponent.apiUrl}users`;
  visitors:number = 0;
  GlobalUsers:any = [];
  
  constructor(private http: HttpClient) { 
    this.GetAllUsers();
    this.GetVisitors();
  }

  GetLatestUser(): Observable<any>
  {
    const url = `${this.url}/latest/user`;
    return this.http.get(url);
  }

  GetLatestBan(): Observable<any>
  {
    const url = `${this.url}/latest/ban`;
    return this.http.get(url);
  }

  RemoveUser(id:number): Observable<any>
  {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  BanUser(user:number, admin:number, time:number, raison:string): Observable<any>
  {
    const url = `${this.url}/ban/`;
    return this.http.post(url, {user, admin, time, raison}, { responseType: 'text' });
  }

  UnbanUser(user:number): Observable<any>
  {
    const url = `${this.url}/unban/${user}`;
    return this.http.delete(url);
  }

  IsUserBanned(user:number): boolean
  {
    const url = `${this.url}/banstatus/${user}`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: data => 
      {
        return parseInt(data);
      }
    });

    return false;
  }
  
  GetUserBySteamID(steamid: string): Observable<any> {
    const url = `${this.url}/getbysteamid/${steamid}`;
    return this.http.get(url);
  }

  GetUserByID(id: number): Observable<any> {
    const url = `${this.url}/getbyid/${id}`;
    return this.http.get(url);
  }

  GetAllUsers(): void {
    this.http.get(this.url).subscribe({
      next: data => 
      {
        this.GlobalUsers = data;
      }
    });
  }

  GetVisitors(): void {
    const url = `${GlobalComponent.apiUrl}totalvisits/`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: data => 
      {
        this.visitors = parseInt(data);
      }
    });
  }

  FindUserIndex(steamid:string)
  {
    return this.GlobalUsers.findIndex((data:any) => data.steamid === steamid)
  }
}