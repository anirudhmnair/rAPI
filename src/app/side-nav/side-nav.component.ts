import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RapiApps,applicationList,applicationApiList,ApplicationApiList } from '../rapi-apps';
import { SideNavAppsComponent } from '../side-nav-apps/side-nav-apps.component';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    SideNavAppsComponent,
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  showFiller = false;

  applicationList: RapiApps[] = applicationList;
  applicationApiList: ApplicationApiList[] = applicationApiList;

}
