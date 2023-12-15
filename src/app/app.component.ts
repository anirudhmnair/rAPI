import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    SideNavComponent,
    MatButtonModule,MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rAPI';

}
