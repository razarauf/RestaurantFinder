import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-fav-restaurants',
  templateUrl: './fav-restaurants.component.html',
  styleUrls: ['./fav-restaurants.component.css']
})
export class FavRestaurantsComponent implements OnInit {
  // get all the items in the db
  items: FirebaseListObservable<any[]>;
  // name: any;
  msgVal: string = '';
  
  constructor( public af: AngularFire, private appComponent: AppComponent ) {
    if (appComponent.name) {
      // console.log(appComponent.name.facebook.displayName)
      this.items = af.database.list('/'+appComponent.name.facebook.displayName);
      // console.log(appComponent.name.facebook.displayName);
    }
  }

  delete (keyToDelete: string){
    this.items.remove (keyToDelete);
  }

  ngOnInit() {
  }

}
