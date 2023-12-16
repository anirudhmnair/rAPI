import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from '../application-list/application-list.component';
import { RouterLink,RouterOutlet } from '@angular/router';
import { ApplicationApiList } from '../rapi-apps';

@Component({
  selector: 'app-side-nav-api',
  standalone: true,
  imports: [CommonModule,
  ApplicationListComponent,
  RouterLink,
  RouterOutlet,
],
  template: `
    <section>
      <a [routerLink]="['/app',applicationApi.name,applicationApi.apiName]" class="api-name">{{applicationApi.apiName}}</a>
    </section>
  `,
  styleUrls: ['./side-nav-api.component.css']
})
export class SideNavApiComponent {
  @Input() applicationApi!: ApplicationApiList;

  
}
