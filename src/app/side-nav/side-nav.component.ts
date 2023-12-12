import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RapiApps } from '../rapi-apps';
import { applications } from '../rapi-apps';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  rapiapplication: RapiApps[] = applications

  constructor() {
    console.log(this.rapiapplication)
  }
}
