import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StarwarsModule } from './starwars/starwars.module';
import { HeaderComponent } from './starwars/components/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
       
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    StarwarsModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
