import { AboutPage } from './../pages/about/about';
import { HomeinfoPage } from './../pages/homeinfo/homeinfo';
import { CameraPage } from './../pages/camera/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularCropperjsModule } from 'angular-cropperjs';
import { Camera } from '@ionic-native/camera';
import { InfoPage } from '../pages/info/info';
@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    InfoPage,
    AboutPage,
    HomeinfoPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularCropperjsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    InfoPage,
    AboutPage,
    HomeinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
