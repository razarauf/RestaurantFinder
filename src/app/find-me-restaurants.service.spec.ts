/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindMeRestaurantsService } from './find-me-restaurants.service';

describe('FindMeRestaurantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindMeRestaurantsService]
    });
  });

  it('should ...', inject([FindMeRestaurantsService], (service: FindMeRestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});
