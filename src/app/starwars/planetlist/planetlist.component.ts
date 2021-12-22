import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { FetchAllDataPlanets,BigDataPlanets} from '../interfaces/starwars.interfaces';

@Component({
  selector: 'app-planetlist',
  templateUrl: './planetlist.component.html',
  styleUrls: ['./planetlist.component.css']
})
export class PlanetlistComponent implements OnInit {

  //creo nuevo array para utilizarlo publico
  public planets: BigDataPlanets[] = [];

  //Traigo la variable del service
  constructor( private starwarsService: StarwarsService) { }

  ngOnInit(): void {

    //Suscribo al servicio para utilizarlo
    this.starwarsService.getPlanets()
      .subscribe( (dataPlanets: any) =>{        
        this.planets = dataPlanets.results
    });

    /*   //Suscribo al servicio para utilizarlo
    this.starwarsService.getPlanets()
    .subscribe( (dataPlanets: any) =>{
      
      this.planets = dataPlanets;

      console.log(this.planets);
      console.log(dataPlanets.next);
      
      
      /* console.log(resp.results);
      console.log(resp.next);
      console.log(resp.count);
      console.log(resp.previous); 
    }); */
  }

}
