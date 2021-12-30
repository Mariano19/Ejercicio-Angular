import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { BigDataPlanets } from '../../interfaces/starwars.interfaces';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-planetList',
  templateUrl: './planetList.component.html',
  styleUrls: ['./planetList.component.css'],
  providers: [ModalComponent]
})
export class PlanetListComponent implements OnInit {

  //creo nuevo array para utilizarlo publico
  public planets: BigDataPlanets[] = [];
  public page: number = 1;
  public validation: any;

  //Traigo la variable del service
  constructor(private starwarsService: StarwarsService) {

  }

  ngOnInit(): void {

    //Suscribo al servicio para utilizarlo y paso el valor de la pagina  
    this.starwarsService.getPlanets(this.page)
      .subscribe((dataPlanets: any) => {
        this.planets = dataPlanets.results;
        this.validation = dataPlanets.next;
      });    
  }


  //Metodos de paginacion
  nextPage() {
    if (this.validation != null) {
      this.page += 1;
    }
    this.ngOnInit();
    console.log(this.page)

  }
  prevPage() {
    if (this.page > 1) {
      this.page -= 1;
    }
    this.ngOnInit();
    console.log(this.page)
  }
}
