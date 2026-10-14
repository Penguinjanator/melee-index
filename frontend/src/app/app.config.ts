import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DEFAULT_DIALOG_CONFIG, DialogConfig } from '@angular/cdk/dialog';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    {
      provide: DEFAULT_DIALOG_CONFIG,
      useValue: {
        hasBackdrop: true,
        backdropClass: 'app-dialog-backdrop',
        autoFocus: 'first-tabbable',
        restoreFocus: true,
      } satisfies DialogConfig,
    },
  ]
};
