import { Injectable } from '@angular/core';

declare var SteamIDConverter: any;

@Injectable({
  providedIn: 'root'
})
export class SteamService 
{
  constructor() { 
  }

  ConvertTo32(steam64:string) {
    return SteamIDConverter.toSteamID(steam64);
  }
}
