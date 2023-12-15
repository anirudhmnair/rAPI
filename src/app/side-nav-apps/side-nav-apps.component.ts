import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RapiApps } from '../rapi-apps';
import { RouterLink,RouterOutlet } from '@angular/router';
import { ApplicationApiList,applicationApiList } from '../rapi-apps';
import { SideNavApiComponent } from '../side-nav-api/side-nav-api.component';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-side-nav-apps',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    SideNavApiComponent,
    MatButtonModule,
  ],
  template: `
    <section>
      <div>
        <button 
          (click)= "showFiller = !showFiller" 
          (click)="appApiById(application.name)" 
          mat-flat-button class="app-button">
          <a [routerLink]="['/app',application.name]" class="app-name">{{application.name}}</a>
        </button>
      </div>
      <div *ngIf="showFiller">
        <app-side-nav-api
        *ngFor= "let applicationApi of filteredApiList"
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
  filteredApiList: ApplicationApiList[] = [];

  appApiById(name: string) {
    this.filteredApiList = this.applicationApiList.filter(applicationApi => applicationApi.name === name)
  }
}
