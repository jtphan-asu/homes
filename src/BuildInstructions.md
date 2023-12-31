// Author: Jonathan Phan and Angular Documentation
// Description: Application built using Angular typescript, Cascading Style Sheets(CSS).
                Angular can scale from single-developer projects to enterprise level applications.
                Angular is designed to make updating straight forward with minimal effort.

**CREATE ANGULAR APPLICATION**
ng new my-app

//Use angular routing and CSS for build

cd my-app

**RUN SERVER**
ng serve --open

**Angular Tutorial**
//Step 1: Hello World
    Change app.component.ts to include template with <h1>Hello World!</h1>

//Step 2: Create the Home component
    ng generate component home --standalone --inline-template --skip-tests

    //Build and serve app
    ng serve

    //Add new component to app's layout

    //Update template property in app.component.ts

    //Add features to home.component.ts
    Section for form input to "Filter by City" and button to search

    //Update home.component.css
    

**Create housing location component**

    //Run command to generate
    ng generate component housingLocation --standalone --inline-template --skip-tests

    Add Housing Location to home component

**Create housing location interface**
 //Run
 ng generate interface housinglocation

 //Add properties to interface
 id, name, city, state, photo, availableUnits, wifi, laundry, pets

**Use housing location interface**
//Inside home component, create a test house as a single instance of the interface

**Create Inputs for housing location component**
//Insert Input tag in housing location component

//Add property binding to app-housing-location

**Update Housing location component**
//Change housing-location.component.ts to include updated template

    Section with image, header, paragraph tag for citt, state, pets

**Update HomeComponent to use ngFor and display HousingLocationList from an array of objects**
housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    },

**Create injectable service for housing**
ng generate service housing --skip-tests

Copy over HousingLocation[] with all current local data

create 2 functions to return housing location by id and entire list

**Add routing to Application**

//Run command to generate Details Component
ng generate component details --standalone --inline-template --skip-tests

//Create routes.ts in /src/app
Import routes.ts, HomeComponent and DetailComponent

//Define the routes in the application
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title:'Home page'
    }
]

//In main.ts
Import routes file and providerRouter function

//Change main.ts to include imported bootstrapAppication with the 
    providers: 
    [provideProtractorTestingSupport(), provideRouter(routeConfig)]

//Change template in app.component.ts to include routerLink and router-outlet
import Router and RouterModule

**Integrate details page into application**

//Create details:id as a path in routes array in routes.ts.  Also use DetailsComponent as component

//Customize DetailsComponent
Update template to include image, location, city,state, units available, wifi, laundry

//"?" operator serves to chain properties.  If it is null, application does not crash
housingLocation?.wifi

**Add method to submit/send form data**
//Add to housing service
submitApplication(firstName: string, lastName: string, email: string){
    console.log('Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.')
  }

**Add the form functions to the details page**

//Add method to send form data in housing.service.ts
    submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
}

//Add form functions FormGroup, FormControl to details.component.ts

    applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
    });

//Add Form handler to submit application using housingService

    submitApplication() {
    this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
    );
    }

//Change HTML in details component template to include form

    <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" formControlName="firstName">

**Add Search Functionality to Application**
//Add HousingLocation array to store filtered location list

//Add constructor for filtered location list.  
//This should contain the total set of housing location values

constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();

  this.filteredLocationList = this.housingLocationList;
}

//Add filter template variable
    <input type="text" placeholder="Filter by city" #filter>

//Bind the click event
    <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>

//Update ngFor
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>

//Add the filterResults function implementation
    filterResults(text: string) {
    if (!text) {
        this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
    }

**Configure JSON server**

sudo npm install -g json-server

//create db.json with static housing information

//run command 
json-server --watch db.json

**Update service to use Web Server instead of local array**

//in src/app/housing.service.ts
//use JSON-server
  url = 'http://localhost:3000/locations';

//Async function to return JSON data
  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

//Async functin to return HousingLocation by ID
 async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

//Submit application
 submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

**Update Components to use Async functions**
//in home.component.ts
constructor() {
  this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
}

//In details.component.ts
constructor() {
  const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
  });
}