import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './application-list/application-list.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'rAPI Home'
    },
    {
        path: 'app/:name',
        component: ApplicationListComponent,
        title: 'rAPI'
    }
];
