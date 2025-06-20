import { provideZonelessChangeDetection } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'

import { AppComponent } from './app'

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
  ],
})
