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

