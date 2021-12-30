import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanetComponent } from './starwars/components/addPlanet/addPlanet.component';
import { PlanetListComponent } from './starwars/components/planetList/planetList.component';

const routes: Routes = [
{
  path: '',
  component: PlanetListComponent
},  
{
  path: 'add',
  component: AddPlanetComponent
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
