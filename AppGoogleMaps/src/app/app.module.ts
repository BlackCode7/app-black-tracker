import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapaComponent } from './googlemapa/googlemapa.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapaComponent
    // Colocar a chave API KEy google maps aqui
  //   AgmCoreModule.forRoot({
  //     apiKey: ''
  //   })

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
