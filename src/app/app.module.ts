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

// pages
import { TabsPage } from '../pages/tabs/tabs';
import { ListsPage } from '../pages/lists/lists';
import { FinishedPage } from '../pages/finished/finished';
import { DetailListPage } from '../pages/detail-list/detail-list';
import { ModalCreateListPage } from '../pages/modal-create-list/modal-create-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ListsPage,
    FinishedPage,
    DetailListPage,
    MainHeaderComponent,
    ButtonAddComponent,
    ModalCreateListPage,
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
    DetailListPage,
    ModalCreateListPage,
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
