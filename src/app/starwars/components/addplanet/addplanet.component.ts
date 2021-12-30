import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { SmallDataPlanetsLocal } from '../../interfaces/starwars.interfaces';

@Component({
  selector: 'app-addPlanet',
  templateUrl: './addPlanet.component.html',
  styleUrls: ['./addPlanet.component.css']
})
export class AddPlanetComponent implements OnInit {

  localPlanets: SmallDataPlanetsLocal[] = [];

  constructor(
    public StarwarsService: StarwarsService
  ) {
  }


  ngOnInit(): void {
    this.localPlanets =  this.StarwarsService.getLocalPlanets();
  }

  //Metodo para guardar los planetas usando el servicio y la interfaz creadas
  //poner en clomunas los htlminput
  addPlanet(name: HTMLInputElement, gravity: HTMLInputElement, climate: HTMLInputElement) {

    this.StarwarsService.addLocalPlanets({
      name: name.value,
      gravity: gravity.value,
      climate: climate.value
    });    
    /* console.log(this.StarwarsService.getLocalPlanets()); */
    /* localStorage.setItem("newPlanet", name.value,); */
    /* localStorage.setItem("newPlanet", JSON.stringify(newPlanet)); */
    this.ngOnInit();
    return false;
  }


}
