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
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';


import { AngularCropperjsModule } from 'angular-cropperjs';
import { Camera } from '@ionic-native/camera';
import { InfoPage } from '../pages/info/info';
import { OverviewinfoPage } from '../pages/overviewinfo/overviewinfo';
import { EnvironmentviewPage } from '../pages/environmentview/environmentview';
import { OptionalviewPage } from '../pages/optionalview/optionalview';
import { NashronviewPage } from '../pages/nashronview/nashronview';
import { NewdateviewPage } from '../pages/newdateview/newdateview';
import { OverviewPage } from '../pages/overview/overview';
import { CommentsPage } from '../pages/comments/comments';

import { VariablesPage } from '../pages/variables/variables';
import { DatatypesPage } from '../pages/datatypes/datatypes';
import { OperatorsPage } from '../pages/operators/operators';
import { ControlPage } from '../pages/control/control';
import { DecisionmakingPage } from '../pages/decisionmaking/decisionmaking';
import { NumbersclassPage } from '../pages/numbersclass/numbersclass';
import { CharacterPage } from '../pages/character/character';
import { StringsPage } from '../pages/strings/strings';
import { ArraysPage } from '../pages/arrays/arrays';
import { ExpressionsPage } from '../pages/expressions/expressions';
import { MethodsPage } from '../pages/methods/methods';
import { FilesPage } from '../pages/files/files';
import { ExceptionsPage } from '../pages/exceptions/exceptions';
import { InnerPage } from '../pages/inner/inner';
import { InheritancePage } from '../pages/inheritance/inheritance';
import { OverridingPage } from '../pages/overriding/overriding';
import { PolymorphismPage } from '../pages/polymorphism/polymorphism';
import { AbstractionPage } from '../pages/abstraction/abstraction';
import { EncapsulationPage } from '../pages/encapsulation/encapsulation';
import { InterfacesPage } from '../pages/interfaces/interfaces';
import { PackagesPage } from '../pages/packages/packages';
import { SyntaxPage } from '../pages/syntax/syntax';





import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
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
    HomePage,
    CommentsPage,
    VariablesPage,
    DatatypesPage,
    OperatorsPage,
    ControlPage,
    DecisionmakingPage,
    NumbersclassPage,
    CharacterPage,
    StringsPage,
    ArraysPage,
    ExpressionsPage,
    MethodsPage,
    FilesPage,
    ExceptionsPage,
    InnerPage,
    InheritancePage,
    OverridingPage,
    PolymorphismPage,
    AbstractionPage,
    EncapsulationPage,
    InterfacesPage,
    PackagesPage,
    SyntaxPage
   
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
    HomePage,
    CommentsPage,
    VariablesPage,
    DatatypesPage,
    OperatorsPage,
    ControlPage,
    DecisionmakingPage,
    NumbersclassPage,
    CharacterPage,
    StringsPage,
    ArraysPage,
    ExpressionsPage,
    MethodsPage,
    FilesPage,
    ExceptionsPage,
    InnerPage,
    InheritancePage,
    OverridingPage,
    PolymorphismPage,
    AbstractionPage,
    EncapsulationPage,
    InterfacesPage,
    PackagesPage,
    SyntaxPage

  ],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
