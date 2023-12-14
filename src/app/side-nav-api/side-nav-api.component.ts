import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from '../application-list/application-list.component';
import { ApplicationApiList } from '../rapi-apps';

@Component({
  selector: 'app-side-nav-api',
  standalone: true,
  imports: [CommonModule,
  ApplicationListComponent,
],
  template: `
    <section>
      {{applicationApi.apiName}}
    </section>
  `,
  styleUrls: ['./side-nav-api.component.css']
})
export class SideNavApiComponent {
  @Input() applicationApi!: ApplicationApiList;
}
