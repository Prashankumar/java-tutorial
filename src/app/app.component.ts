import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,private socialSharing: SocialSharing,private menu: MenuController, private callNumber: CallNumber,public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   

  }

  initializeApp() {
    this.platform.ready().then(() => {
    
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  call(){
    this.callNumber.callNumber("+919643226425", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  share(): void {
    this.menu.close();
    this.socialSharing.share(name + " has invited you to join magic Dairy.", "Get fresh milk - Delivered daily!!!", null, "https://play.google.com/store/apps/details?id=magicdairy.theapplab.in.magicdairy&hl=en").then(() => {
      console.log("Share intent created");
    }, (error) => {
      console.log(error);
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
