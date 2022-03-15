import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  url = `${GlobalComponent.apiUrl}cart`;
  producttotal:number = 0;
  constructor(private http: HttpClient) { }

  /** GET **/
  Get(userid:number, token:string): Observable<any> {
    const headers = { 'Authorization': `Bearer ${token}`};
    const url = `${this.url}/${userid}`;
    return this.http.get(url, {headers});
  }

  /** ADD PRODUCT **/
  Add(userid:number, productid:number, quantity:number): Observable<any> {
    return this.http.post(this.url, {userid, productid, quantity});
  }

  /** UPDATE PRODUCT QUANTITY **/
  UpdateQuantity(userid:number, productid:number, quantity:number): Observable<any> {
    return this.http.put(this.url, {userid, productid, quantity});
  }

  /** EMPTY CART **/
  EmptyCart(userid: number): Observable<any> {
    const url = `${this.url}/${userid}`; // DELETE cart/userid
    return this.http.delete(url);
  }

  /** REMOVE PRODUCT **/
  RemoveProduct(userid: number, productid: number): Observable<any> {
    const url = `${this.url}/${userid}/${productid}`; // DELETE cart/userid/productid
    return this.http.delete(url);
  }

  /** UPDATE PRODUCT QUANTITY **/
  GetProductDescription(productid:number): Observable<unknown> {
    const url = `${this.url}/description/${productid}`; // DELETE cart/userid/productid
    return this.http.get(url);
  }
}