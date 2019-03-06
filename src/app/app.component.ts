import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api-service';

  constructor(private _location: Location) { }

  goBack() {
    this._location.back();
  }

  goFoward() {
    this._location.forward();
  }

}
