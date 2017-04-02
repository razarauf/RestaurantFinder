import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindRestaurantsComponent }   from './find-restaurants/find-restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants',  component: FindRestaurantsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}