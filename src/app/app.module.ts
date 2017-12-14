import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// service
import { WishListService } from './services/wish-list.service';


import { TabsPage } from '../pages/tabs/tabs';
import { PendingPage } from '../pages/pending/pending';
import { FinishedPage } from '../pages/finished/finished';
import { AddPage } from '../pages/add/add';
import { DetailListPage } from '../pages/detail-list/detail-list';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PendingPage,
    FinishedPage,
    AddPage,
    DetailListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendingPage,
    FinishedPage,
    AddPage,
    DetailListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
