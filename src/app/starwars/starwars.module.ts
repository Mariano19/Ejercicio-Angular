import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetlistComponent } from './components/planetlist/planetlist.component';
import { ModalComponent } from './components/modal/modal.component';





@NgModule({
  declarations: [
    PlanetlistComponent,
    ModalComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlanetlistComponent
    
  ]

})
export class StarwarsModule { }
