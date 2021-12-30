import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetListComponent } from './components/planetList/planetList.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddPlanetComponent } from './components/addPlanet/addPlanet.component';
import { StarwarsService } from './services/starwars.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    PlanetListComponent,
    ModalComponent,
    AddPlanetComponent 
  ],
  imports: [
    CommonModule,
    NgbModule
    
  ],
  providers: [
    StarwarsService    
  ],
  exports:[
    PlanetListComponent        
  ]

})
export class StarwarsModule { }
