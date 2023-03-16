import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './another/another.component';
import { NotificationService } from './service/notification.service';

@NgModule({
  declarations: [				
    AppComponent,
      NotificationComponent,
      OtherComponent,
      AnotherComponent,
   ],
  imports: [
    BrowserModule,
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
