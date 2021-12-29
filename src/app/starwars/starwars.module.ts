import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetlistComponent } from './components/planetlist/planetlist.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddplanetComponent } from './components/addplanet/addplanet.component';
import { StarwarsService } from './services/starwars.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    PlanetlistComponent,
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
    PlanetlistComponent    
  ]

})
export class StarwarsModule { }
