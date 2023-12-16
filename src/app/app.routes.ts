import { Routes } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'rAPI Home'
    },
    {
        path: 'app/:name',
        component: ApplicationListComponent,
        title: 'rAPI App'
    },
    {
        path: 'app/:name/:apiName',
        component: PlaygroundComponent,
        title: 'rAPI api'
    }
];
