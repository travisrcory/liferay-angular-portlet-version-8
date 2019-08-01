import { Component } from '@angular/core';

// Import environment, by default use Liferay path

import { environment } from '../environments/environment';

const templateUrl = `${environment.basePath}app/app.component.html`;
// const styleUrls = [`${environment.basePath}app/app.component.css`];

console.log(templateUrl);

@Component({
  templateUrl: '/o/my-dream-app/app/app.component.html'
})
export class AppComponent {
  title = 'my-dream-app';
}
