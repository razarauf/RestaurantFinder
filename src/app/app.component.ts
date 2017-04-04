import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name: any;

  constructor (public af: AngularFire, router: Router) {
    this.af.auth.subscribe (auth => {
      this.name = auth;
    });
  }

  login() {
    this.af.auth.login ({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  logout(){
    this.af.auth.logout();
  }

}
