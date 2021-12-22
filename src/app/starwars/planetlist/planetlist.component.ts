import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-planetlist',
  templateUrl: './planetlist.component.html',
  styleUrls: ['./planetlist.component.css']
})
export class PlanetlistComponent implements OnInit {

  constructor( private starwarsService: StarwarsService) { }

  ngOnInit(): void {

    //Suscribo al servicio para utilizarlo
    this.starwarsService.getPlanets()
      .subscribe( resp =>{
        console.log(resp);
      });
  }

}
