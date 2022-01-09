import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapaComponent } from './googlemapa/googlemapa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapaComponent,
    TelaLoginComponent
    // Colocar a chave API KEy google maps aqui
  //   AgmCoreModule.forRoot({
  //     apiKey: ''
  //   })

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
