import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RapiApps } from '../rapi-apps';
import { RouterLink,RouterOutlet } from '@angular/router';
import { ApplicationApiList,applicationApiList } from '../rapi-apps';
import { SideNavApiComponent } from '../side-nav-api/side-nav-api.component';

@Component({
  selector: 'app-side-nav-apps',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    SideNavApiComponent
  ],
  template: `
    <section>
      <button (click)= "showFiller = !showFiller" mat-raised-button>
        <img class="navigation-image " [src]= "application.image" >
        <a [routerLink]="['/app',application.name]">{{application.name}}</a>
      </button>
      <div *ngIf="showFiller">
        <app-side-nav-api
        *ngFor= "let applicationApi of applicationApiList"
        [applicationApi] ="applicationApi"
        ></app-side-nav-api>
      </div>
    </section>
  `,
  styleUrls: ['./side-nav-apps.component.css']
})
export class SideNavAppsComponent {
  showFiller = false;
  @Input() application!: RapiApps;
  
  applicationApiList: ApplicationApiList[] = applicationApiList;

  constructor() {
    console.log('app is !!!!!!!!!!!',this.applicationApiList)
  }

}
