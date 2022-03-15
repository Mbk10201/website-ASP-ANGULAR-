import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Notiflix from 'notiflix';
import { iPatch } from '../models/informations';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class PatchnotesService 
{
  url = `${GlobalComponent.apiUrl}patchnotes`;
  
  constructor(private http: HttpClient) {}

  /** GET **/
  Get(): Observable<any> {
    return this.http.get(this.url);
  }

   /** INSERT **/
  Insert(request: iPatch) {
    this.http.post(this.url, request, { responseType: 'text' }).subscribe({
      next: () => 
      {
        Notiflix.Notify.success('Patchnote ajouté avec succès.');
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
  Update(request: iPatch) {
    this.http.put(this.url, request, { responseType: 'text' }).subscribe({
      next: () => 
      {
        Notiflix.Notify.success('Patchnote modifié avec succès.');
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
