import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// service
import { WishListService } from './services/wish-list.service';

// pipes
import { PipesModule } from "../pipes/pipes.module";

// components
import { MainHeaderComponent } from "../components/main-header/main-header";
import { ButtonAddComponent } from "../components/button-add/button-add";

import { TabsPage } from '../pages/tabs/tabs';
import { ListsPage } from '../pages/lists/lists';
import { FinishedPage } from '../pages/finished/finished';
import { AddPage } from '../pages/add/add';
import { DetailListPage } from '../pages/detail-list/detail-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ListsPage,
    FinishedPage,
    AddPage,
    DetailListPage,
    MainHeaderComponent,
    ButtonAddComponent,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListsPage,
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
