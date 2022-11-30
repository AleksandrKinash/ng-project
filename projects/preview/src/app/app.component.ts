import { Component, isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preview';

  constructor() {
    console.warn("environment: ", environment.production);
    console.warn("isDevMode(): ", isDevMode());
  }
}
