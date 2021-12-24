import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';
import { FetchAllDataPlanets,BigDataPlanets} from '../../interfaces/starwars.interfaces';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardsComponent } from '../cards/cards.component';



@Component({
  selector: 'app-planetlist',
  templateUrl: './planetlist.component.html',
  styleUrls: ['./planetlist.component.css']
})
export class PlanetlistComponent implements OnInit {

  //creo nuevo array para utilizarlo publico
  public planets: BigDataPlanets[] = [];
  public page: number = 1;
  public validation: any;

  //Traigo la variable del service
  constructor( 
    private starwarsService: StarwarsService,
    public dialog :MatDialog
    ) {
    
   }

  ngOnInit(): void {

    //Suscribo al servicio para utilizarlo y paso el valor de la pagina  
    this.starwarsService.getPlanets(this.page)
      .subscribe( (dataPlanets: any) =>{        
        this.planets = dataPlanets.results
        this.validation = dataPlanets.next
        /* console.log(this.validation) */
        
    });    
  }
  

  //Metodos de paginacion
  nextPage(){
    if(this.validation != null){
      this.page +=1;
    }  
    this.ngOnInit();
    console.log(this.page)
    
  }
  prevPage(){
    if(this.page>1)
      this.page -=1;
      this.ngOnInit();  
      console.log(this.page)    
  }

  openDialog():void{
    const dialogRef = this.dialog.open(CardsComponent, {});
    dialogRef.afterClosed().subscribe(resp =>{
      console.log(resp);
    });
  }


  




}
