import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class ServersService
{
  url = `${GlobalComponent.apiUrl}servers`;
  data:any = [];
  
  constructor(private http: HttpClient) {}

  /** GET **/
  get(): Observable<any> {
    return this.http.get(this.url);
  }
}