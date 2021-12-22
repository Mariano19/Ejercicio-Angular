import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  //URL de la api
  private url: string = 'https://swapi.dev/api/planets/'

  constructor(private http: HttpClient) { }

  //Observable, regresa la informacion cuando alguien se suscriba
  getPlanets(){
    return this.http.get(this.url)
  }

}
