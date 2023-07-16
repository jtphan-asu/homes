import { Component } from '@angular/core';

//Import HomeComponent from created home component in /src/app
import { HomeComponent } from './home/home.component';

import { HousingLocationComponent } from './housing-location/housing-location.component';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, HousingLocationComponent, HomeComponent,
  RouterModule ],
  styleUrls: ['./app.component.css'],
  template: `
  <main>
    <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
  </a>

    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'homes';
}
