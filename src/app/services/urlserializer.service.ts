import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlserializerService {

  constructor(private router: Router, private serializer: UrlSerializer) { 

  }

  Serialize(queryParams:any): string {
    //const queryParams = { foo: 'a', bar: 42 };
    const tree = this.router.createUrlTree([], { queryParams });
    return this.serializer.serialize(tree);
  }
}