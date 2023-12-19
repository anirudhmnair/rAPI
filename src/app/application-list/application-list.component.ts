import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';


@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
  ],
  template: `
    <section>
      <div>Lets Start!</div>
    </section>
  `,
  styleUrls: ['./application-list.component.css']
})

export class ApplicationListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

}
