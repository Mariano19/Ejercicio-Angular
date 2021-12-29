import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { takeLast } from 'rxjs';
import { FetchAllDataPlanets, BigDataPlanets, SmallDataPlanetsLocal } from '../interfaces/starwars.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  //URL de la api
  private url: string = 'https://swapi.dev/api/planets/'
  //Servicio para almacenar los planetas en el localstorage 
  planetsLocal: SmallDataPlanetsLocal[] = [];


  //Observable, regresa la informacion cuando alguien se suscriba
  //Asigno un valor numerico por cada pagina
  getPlanets(pageNumber: Number) {    
    return this.http.get<BigDataPlanets>(`${this.url}/?page=${pageNumber}`)
  }



  


  //Metodos para el componente addplanet
  
  getLocalPlanets() {
    return this.planetsLocal;
  }

  addLocalPlanets(planet: SmallDataPlanetsLocal){
    //Creo un array local para guardar los planetas y luego guardarlos en el localstorage

    let planetsList : SmallDataPlanetsLocal[] = []; 

    //Comprobacion si hay datos para no sobreescribirlos, si no hay nada toma el arreglo y lo guarda
    //y si existe toma los datos previos
    if(localStorage.getItem('planets') === null ){
      planetsList.push(planet);
      localStorage.setItem('planets', JSON.stringify(planetsList));
    }
    else{
      planetsList = JSON.parse(localStorage.getItem('planets') || '{}'); 
      planetsList.push(planet);
      localStorage.setItem('planets', JSON.stringify(planetsList));
    }
    

    this.planetsLocal.push(planet);
    
    return false; 
  }

}
