import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetlistComponent } from './components/planetlist/planetlist.component';




@NgModule({
  declarations: [
    PlanetlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlanetlistComponent
  ]

})
export class StarwarsModule { }
