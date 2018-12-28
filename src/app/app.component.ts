import { AboutPage } from './../pages/about/about';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
    
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  about() {
    this.nav.push(AboutPage);
  }

  home() {
    this.nav.push(HomePage);
  }

  share() {
  }

  rateApp() {
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
