import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `${GlobalComponent.apiUrl}product`;
  constructor(private http: HttpClient) { }

  /** GLOBAL **/
  GetAll(): Observable<any> {
    return this.http.get(this.url);
  }

  GetProduct(id:number): Observable<unknown> {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }

  GetProductByCategory(category:string): Observable<any> {
    const url = `${this.url}/bycategory/${category}`;
    return this.http.get(url);
  }

  GetProductName(id:number): Observable<any> {
    const url = `${this.url}/name/${id}`;
    return this.http.get(url);
  }

  UpdateProductName(id:number, name:string): Observable<any> {
    const url = `${this.url}/name`;
    return this.http.post(url, {id, name}, { responseType: 'text' });
  }

  GetProductDescription(id:number): Observable<any> {
    const url = `${this.url}/description/${id}`;
    return this.http.get(url);
  }
  
  UpdateProductDescription(id:number, description:string): Observable<any> {
    const url = `${this.url}/description`;
    return this.http.post(url, {id, description}, { responseType: 'text' });
  }

  GetProductPrice(id:number): Observable<any> {
    const url = `${this.url}/price/${id}`;
    return this.http.get(url);
  }
  
  UpdateProductPrice(id:number, price:number): Observable<any> {
    const url = `${this.url}/price`;
    return this.http.post(url, {id, price}, { responseType: 'text' });
  }

  GetProductImage(id:number): Observable<any> {
    const url = `${this.url}/image/${id}`;
    return this.http.get(url);
  }
  
  UpdateProductImage(id:number, imagefile:string): Observable<any> {
    const url = `${this.url}/image`;
    return this.http.post(url, {id, imagefile}, { responseType: 'text' });
  }

  GetProductCategory(id:number): Observable<any> {
    const url = `${this.url}/category/${id}`;
    return this.http.get(url);
  }
  
  UpdateProductCategory(id:number, category:string): Observable<any> {
    const url = `${this.url}/category`;
    return this.http.post(url, {id, category}, { responseType: 'text' });
  }
}
