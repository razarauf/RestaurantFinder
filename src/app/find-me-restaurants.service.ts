import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RestaurantStore } from './restaurant-store';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class FindMeRestaurantsService {

  constructor(private http: Http) { }

   getRestaurants(): Promise<RestaurantStore[]> {
    var tmpAry: Array<RestaurantStore> = [];
    this.http.get('http://www.mocky.io/v2/58dae7d20f00000113d66c72')
      .toPromise()
      .then(function (response) {

          let obj = JSON.parse(JSON.stringify(response.json()));
          for (let eachElement of obj.results)
          {
              tmpAry.push(new RestaurantStore(false, String(eachElement.name)));
          }
          
      })
      .catch(this.handleError);
      return Promise.resolve (tmpAry);;
  }

  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        // Rejected promise 
        return Promise.reject(error.message || error);
    }

}
