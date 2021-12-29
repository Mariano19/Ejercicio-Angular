import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from './app.module';
import { AddplanetComponent } from './starwars/components/addplanet/addplanet.component';
import { PlanetListComponent } from './starwars/components/planetList/planetList.component';

const routes: Routes = [
{
  path: '',
  component: PlanetListComponent
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
