import { bootstrapApplication } from '@angular/platform-browser';
import { CORE_PROVIDERS } from './app/core/core.provider';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    ...CORE_PROVIDERS
  ]
}).catch(err => console.error(err));
