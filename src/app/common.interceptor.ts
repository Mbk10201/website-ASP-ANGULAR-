import { LoaderService } from './loader/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor 
{
  constructor(private loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> 
  {
    this.loader.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.isLoading.next(false);
      })
    );
  }
}