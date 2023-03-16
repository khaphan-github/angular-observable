import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-another',
  template: `
    <h4>Other Component {{idSubcribe}}: </h4>
    <h4>Recieved data: {{valueFromNotification}}</h4>
    <button (click)="onSubcribeNotification()">Subcribe</button>
    <button (click)="onUnsubcribeNotification()">Un Subcribe</button>
  `,
})
export class AnotherComponent implements OnInit {

  valueFromNotification: any = '';
  idSubcribe: string = '';
  
  private notification$?: Observable<any>;
  private subcribeChanel?: Subscription;

  constructor(private notifiService: NotificationService) { }

  ngOnInit() {
    this.notification$ = this.notifiService.getSimpleData();
  }

  public onSubcribeNotification() {
    console.log("Subcribe notification");
    this.idSubcribe = 'Subcribed';
    this.subcribeChanel = this.notification$?.subscribe(
      (data) => {
        console.log("2. Data recieve from Observable: ", data);
        this.valueFromNotification = data;
      });
  }

  public onUnsubcribeNotification() {
    this.subcribeChanel?.unsubscribe();
    this.valueFromNotification = '';
    this.idSubcribe = ''
  }
}
