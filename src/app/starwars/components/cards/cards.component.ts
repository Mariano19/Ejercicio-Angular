import { Component, OnInit, Input, Inject } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { FetchAllDataPlanets,BigDataPlanets} from '../../interfaces/starwars.interfaces';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  

  public planets: BigDataPlanets[] = [];

  constructor(){}
    

  ngOnInit(): void {     
  }

  

}
