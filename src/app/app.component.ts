import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Example for Observable:</h3>
    <h5>1. Notification send data to Observable</h5>
    <app-notification></app-notification>
    <h5>------------------------------------------------------</h5>
    <h5>2. Data recieve from Observable when subcribe</h5>
    <app-another></app-another>
    <h5>------------------------------------------------------</h5>
    <app-other></app-other>
  `,
})
export class AppComponent {
  title = 'angular-observable';
}
