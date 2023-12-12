import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section>
      application-list works!
</section>
  `,
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);


}
