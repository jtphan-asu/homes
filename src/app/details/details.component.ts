import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLocationId}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})

//DetailsComponent class
export class DetailsComponent {

  //Enables access to data about current route
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;

  //Convert id parameter from the route to a number
  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
