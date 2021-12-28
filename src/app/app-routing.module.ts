import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from './app.module';
import { AddplanetComponent } from './starwars/components/addplanet/addplanet.component';
import { PlanetlistComponent } from './starwars/components/planetlist/planetlist.component';

const routes: Routes = [
{
  path: '',
  component: PlanetlistComponent
},  
{
  path: 'add',
  component: AddplanetComponent
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
