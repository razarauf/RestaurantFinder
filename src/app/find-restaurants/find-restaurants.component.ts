import { Component, OnInit } from '@angular/core';
import { FindMeRestaurantsService } from '../find-me-restaurants.service';

@Component({
  selector: 'app-find-restaurants',
  templateUrl: './find-restaurants.component.html',
  styleUrls: ['./find-restaurants.component.css']
})
export class FindRestaurantsComponent implements OnInit {
  selectedRestaurant: string;
  aryOfRestaurants: string[];

  constructor(private findMeRestaurantsService: FindMeRestaurantsService) { }

  ngOnInit() {
    this.findMeRestaurantsService.getRestaurants()
      .then (passedRest => this.aryOfRestaurants = passedRest);
  }

  onSelect(selectedRestaurant: string): void {
    this.selectedRestaurant = selectedRestaurant;
    // console.log(this.selectedRestaurant);
  }

}
