import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindRestaurantsComponent } from './find-restaurants/find-restaurants.component';
import { FavRestaurantsComponent } from './fav-restaurants/fav-restaurants.component';

import { FindMeRestaurantsService } from './find-me-restaurants.service'

import { AppRoutingModule }     from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [FindMeRestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
