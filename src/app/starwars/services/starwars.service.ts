import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BigDataPlanets, SmallDataPlanetsLocal } from '../interfaces/starwars.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  //URL de la api
  private url: string = 'https://swapi.dev/api/planets/';


  //Observable, regresa la informacion cuando alguien se suscriba
  //Asigno un valor numerico por cada pagina
  getPlanets(pageNumber: Number) {
    return this.http.get<BigDataPlanets>(`${this.url}/?page=${pageNumber}`)
  }



  

  //Creo un array local para guardar los planetas y luego guardarlos en el localstorage
  getLocalPlanets() {
    let localStoragePlanetsString = localStorage.getItem('planets') || '{}';
    console.log(JSON.parse(localStoragePlanetsString))
    return JSON.parse(localStoragePlanetsString);
    
  }

  addLocalPlanets(planet: SmallDataPlanetsLocal) {
    let planetsLocal = this.getLocalPlanets();
    planetsLocal.push(planet);
    localStorage.setItem('planets', JSON.stringify(planetsLocal));
    return false;    
  }



}
