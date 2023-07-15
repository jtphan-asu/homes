import { Component } from '@angular/core';

//Import HomeComponent from created home component in /src/app
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css'],
  template: '<h1>Hello World!</h1>',
})
export class AppComponent {
  title = 'homes';
}
