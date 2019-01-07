import { AboutPage } from './../pages/about/about';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private socialSharing: SocialSharing) {
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

  shareInfo()
  {
    this.socialSharing.share("Download Java Overview app from play store", "Java Overview", "", "market://details?id=com.java.offline.amit").
    then(() => {
    //alert("Sharing success");
    // Success!
    }).catch(() => {
    // Error!
    //alert("Share failed");
    });
}

  rateApp() {
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
