import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import routeConfig from './routes';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

bootstrapApplication(AppComponent, 
  appConfig
  ).catch((err) => console.error(err));
