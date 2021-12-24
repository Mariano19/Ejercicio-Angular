import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllDataPlanets,BigDataPlanets} from '../interfaces/starwars.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  //URL de la api
  private url: string = 'https://swapi.dev/api/planets/'

  constructor(private http: HttpClient) { }

  //Observable, regresa la informacion cuando alguien se suscriba
  //Asigno un valor numerico por cada pagina
  getPlanets(pageNumber:Number){
    /*return this.http.get<FetchAllDataPlanets>(this.url)*/
    /*const url = this.url+pageNumber;*/
    return this.http.get<BigDataPlanets>(`${this.url}/?page=${pageNumber}`)
    
    /*j*/ 
  }

}
