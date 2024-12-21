import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ngsw-worker.js').then(() => {
      console.log('Service Worker registered successfully.');
    }).catch(err => {
      console.error('Service Worker registration failed:', err);
    });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
