import { Component, OnInit, Input, Inject } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { FetchAllDataPlanets,BigDataPlanets} from '../../interfaces/starwars.interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  

  public planets: BigDataPlanets[] = [];

  constructor( 
    public dialogref: MatDialogRef<CardsComponent>,
    @Inject (MAT_DIALOG_DATA) public message: string) {   }

  ngOnInit(): void {     
  }

  

}
