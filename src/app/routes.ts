import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

//Define the routes in the application
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title:'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    }
];

export default routeConfig;