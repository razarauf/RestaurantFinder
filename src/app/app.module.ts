import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindRestaurantsComponent } from './find-restaurants/find-restaurants.component';
import { FavRestaurantsComponent } from './fav-restaurants/fav-restaurants.component';

import { FindMeRestaurantsService } from './find-me-restaurants.service'

import { AppRoutingModule }     from './app-routing.module';

import { AngularFireModule } from 'angularfire2';

// Initialize Firebase
  var config = {
    
  };
  

@NgModule({
  declarations: [
    AppComponent,
    FindRestaurantsComponent,
    FavRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [FindMeRestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
