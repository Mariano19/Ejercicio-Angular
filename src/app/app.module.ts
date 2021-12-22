import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './components/items/items.component';
import { StarwarsModule } from './starwars/starwars.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent    
  ],
  imports: [
    StarwarsModule,
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
