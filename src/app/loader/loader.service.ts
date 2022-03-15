import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  Display(type: string = "standard", message: string = "", timeout:number = 0)
  {
    var loadtype = Notiflix.Loading;
    if(type === "standard")
      loadtype.standard(message);
    else if(type === "hourglass")
      loadtype.hourglass(message);
    else if(type === "circle")
      loadtype.circle(message);
    else if(type === "arrows")
      loadtype.arrows(message);
    else if(type === "dots")
      loadtype.dots(message);
    else if(type === "pulse")
      loadtype.pulse(message);

    Notiflix.Loading.remove(timeout);
  }

  constructor() { }
}
