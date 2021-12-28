import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-addplanet',
  templateUrl: './addplanet.component.html',
  styleUrls: ['./addplanet.component.css']
})
export class AddplanetComponent implements OnInit {

  

  constructor(
    public StarwarsService : StarwarsService
  ) { 
    /* this.addPlanet(); */
  }

  
  ngOnInit(): void {
    this.StarwarsService.getLocalPlanets();
  }

  //Metodo para guardar los planetas usando el servicio y la interfaz creadas
  addPlanet(name:HTMLInputElement, gravity:HTMLInputElement, climate:HTMLInputElement){
    
    this.StarwarsService.addLocalPlanets({
      name : name.value,
      gravity : gravity.value,
      climate : climate.value
    });
    console.log("andando")
    /* console.log(this.StarwarsService.getLocalPlanets()); */
    /* localStorage.setItem("newPlanet", name.value,); */
    /* localStorage.setItem("newPlanet", JSON.stringify(newPlanet)); */
    return false;
  }

}
