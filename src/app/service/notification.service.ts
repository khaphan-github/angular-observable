import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /**
   * Subject - Store not store finally data it recieved 
   * */
  // private notificationData$: Subject<any> = new Subject<any>;

  // "BEHAVIOR" is default value when other component subcribe it;
  // private notificationData$: BehaviorSubject<any> = new BehaviorSubject<any> ("BEHAVIOR");
  
  // "1" is numof element ReplaySubject Keep in it's cache;
  // private notificationData$: ReplaySubject<any> = new ReplaySubject<any>(1); 

  // EveryWhen AsyncSubject complete it will be removed;
   private notificationData$: AsyncSubject<any> = new AsyncSubject<any>;


  constructor() { }
  /** 
   * A component want to send message to this component
   * */
  public setSimpleData = (notifi: any) => {
    return this.notificationData$.next(notifi);
  };

  /**
   *  Other component want to use this data use: 
   *  .getSimpleData.subcribe((data) => console.log(data));
   * */
  public getSimpleData = (): Observable<any> => {
    return this.notificationData$.asObservable();
  }

  public onCompleteAsyncSubject = (): void => {
    this.notificationData$.complete();
  }
}
