import { HomePage } from './../pages/home/home';
import { QuestionAnswerPage } from './../pages/question-answer/question-answer';
import { Base64viewPage } from './../pages/base64view/base64view';
import { StreamsviewPage } from './../pages/streamsview/streamsview';
import { DefaultviewPage } from './../pages/defaultview/defaultview';
import { FunctionalviewPage } from './../pages/functionalview/functionalview';
import { MethodviewPage } from './../pages/methodview/methodview';
import { LambdaviewPage } from './../pages/lambdaview/lambdaview';
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
import { OverviewinfoPage } from '../pages/overviewinfo/overviewinfo';
import { EnvironmentviewPage } from '../pages/environmentview/environmentview';
import { OptionalviewPage } from '../pages/optionalview/optionalview';
import { NashronviewPage } from '../pages/nashronview/nashronview';
import { NewdateviewPage } from '../pages/newdateview/newdateview';
import { OverviewPage } from '../pages/overview/overview';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    InfoPage,
    AboutPage,
    HomeinfoPage,
    OverviewinfoPage,
    EnvironmentviewPage,
    LambdaviewPage,
    MethodviewPage,
    FunctionalviewPage,
    DefaultviewPage,
    StreamsviewPage,
    OptionalviewPage,
    NashronviewPage,
    NewdateviewPage,
    Base64viewPage,
    QuestionAnswerPage,
    OverviewPage,
    HomePage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularCropperjsModule,
    IonicImageViewerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    InfoPage,
    AboutPage,
    HomeinfoPage,
    OverviewinfoPage,
    EnvironmentviewPage,
    LambdaviewPage,
    MethodviewPage,
    FunctionalviewPage,
    DefaultviewPage,
    StreamsviewPage,
    OptionalviewPage,
    NashronviewPage,
    NewdateviewPage,
    Base64viewPage,
    QuestionAnswerPage,
    OverviewPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
