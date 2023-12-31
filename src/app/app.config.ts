import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    provideAnimations(), 
    provideProtractorTestingSupport(),
    importProvidersFrom(HttpClientModule),
  ]
};
