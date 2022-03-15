import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { 
    Notiflix.Notify.init({
      cssAnimation: true,
      cssAnimationDuration: 400,
      cssAnimationStyle: 'zoom',
      clickToClose: true,
      plainText: false,
      success: {
        background: '#545454',
        textColor: '#DADADA',
        notiflixIconColor: '#80EB3E',
      },
      info: {
        background: '#545454',
        textColor: '#DADADA',
        notiflixIconColor: '#00B4E8',
      },
      failure: {
        background: '#545454',
        textColor: '#DADADA',
        notiflixIconColor: '#F13700',
      },
      warning: {
        background: '#545454',
        textColor: '#DADADA',
        notiflixIconColor: '#F1BA00',
      },
    });
  }

  Info(message: string): void {
    Notiflix.Notify.info(message);
  }

  Success(message: string): void {
    Notiflix.Notify.success(message);
  }

  Error(message: string): void {
    Notiflix.Notify.failure(message);
  }

  Warn(message: string): void {
    Notiflix.Notify.warning(message);
  }
}
