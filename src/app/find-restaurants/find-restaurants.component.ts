import { Component, OnInit } from '@angular/core';
import { FindMeRestaurantsService } from '../find-me-restaurants.service';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2'
import { AppComponent } from '../app.component';
import { RestaurantStore } from '../restaurant-store';

@Component({
  selector: 'app-find-restaurants',
  templateUrl: './find-restaurants.component.html',
  styleUrls: ['./find-restaurants.component.css']
})
export class FindRestaurantsComponent implements OnInit {
  selectedRestaurant: string;
  aryOfRestaurants: RestaurantStore[];
  items: FirebaseListObservable<any[]>;
  items2: FirebaseListObservable<any[]>;

  constructor(private findMeRestaurantsService: FindMeRestaurantsService, 
    public af: AngularFire, private appComponent: AppComponent) { }

  ngOnInit() {
    this.findMeRestaurantsService.getRestaurants()
      .then (passedRest => this.aryOfRestaurants = passedRest);
    
    
  }

  isRestaurantInFavourites(restaurantName: string) : boolean {
    if (this.appComponent.name) {
    this.items2 = this.af.database.list('/'+this.appComponent.name.facebook.displayName, { preserveSnapshot: true });
    this.items2
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          if (snapshot.key === restaurantName) {
            console.log(restaurantName)
            return true;
          } 
        });
      })
    }

    return false;
  }

  onSelect(selectedRestaurant: string): void {
    this.selectedRestaurant = selectedRestaurant;
    this.findMeRestaurantsService.addRestaurantToFavourite (selectedRestaurant);

    // setting the key as the restaurant's name to only store unique restaurant names
    if (this.appComponent.name) {
      this.items = this.af.database.list('/'+this.appComponent.name.facebook.displayName);
      this.items.$ref.ref.child(selectedRestaurant).set("0")
    }

    


    // if (this.appComponent.name) {
    // this.items2 = this.af.database.list('/'+this.appComponent.name.facebook.displayName, { preserveSnapshot: true });
    // this.items2
    //   .subscribe(snapshots => {
    //     snapshots.forEach(snapshot => {
    //       if (snapshot.key === selectedRestaurant) {
    //         console.log(selectedRestaurant)
    //         // return true;
    //       } 
    //     });
    //   })
    // }
  }



  

}
