import { Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { SideNavComponent } from "./app/side-nav/side-nav.component";
import { routes } from "./app/app.routes";
import { ApplicationListComponent } from "./app/application-list/application-list.component";

const routeConfig: Routes=[
    {
        path: '',
        component: AppComponent,
        title: 'rAPI'
    },
    {
        path: 'app/:name',
        component: ApplicationListComponent,
        title: 'rAPI | :name'
    }
]

export default routeConfig;