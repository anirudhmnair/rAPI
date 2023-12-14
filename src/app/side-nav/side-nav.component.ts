import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RapiApps,applicationList } from '../rapi-apps';
import { SideNavAppsComponent } from '../side-nav-apps/side-nav-apps.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    SideNavAppsComponent
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  showFiller = false;

  applicationList: RapiApps[] = applicationList;

}
