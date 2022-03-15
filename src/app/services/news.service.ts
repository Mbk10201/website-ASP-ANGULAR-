import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Notiflix from 'notiflix';
import { iNew } from '../models/informations';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class NewsService 
{
  url = `${GlobalComponent.apiUrl}news`;
  
  constructor(private http: HttpClient) {}
  
  /** GET **/
  Get(): Observable<any> {
    return this.http.get(this.url);
  }

  /** INSERT **/
  Insert(request: iNew) {
    this.http.post(this.url, request, { responseType: 'text' }).subscribe({
      next: () => 
      {
        Notiflix.Notify.success('Nouvelle ajoutée avec succès.');
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

  /** UPDATE **/
  Update(request: iNew) {
    this.http.put(this.url, request, { responseType: 'text' }).subscribe({
      next: () => 
      {
        Notiflix.Notify.success('Nouvelle modifiée avec succès.');
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

  /** DELETE **/
  Delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
