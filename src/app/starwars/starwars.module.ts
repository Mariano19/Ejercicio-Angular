import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetListComponent } from './components/planetList/planetList.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddplanetComponent } from './components/addplanet/addplanet.component';
import { StarwarsService } from './services/starwars.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    PlanetListComponent,
    ModalComponent,
    AddplanetComponent 
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
