import { Component } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notification',
  template: `
    <h4>Notification Component:</h4>
    <input (keyup)="passDataToOtherComponent($event)" />
    <button (click)="onCompleteAsyncSubject()">Complete</button>
  `,
})
export class NotificationComponent {

  constructor(private notifi: NotificationService) { }

  passDataToOtherComponent = (event: any) => {
    console.warn("1. Data send to Observable: ", event.target.value)
    this.notifi.setSimpleData(event.target.value);
  }

  onCompleteAsyncSubject = (): void => {
    this.notifi.onCompleteAsyncSubject();
    console.log("Complete task!!!");
  }
}
