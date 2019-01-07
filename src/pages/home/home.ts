import { OverviewPage } from './../overview/overview';
import { AboutPage } from './../about/about';
import { QuestionAnswerPage } from './../question-answer/question-answer';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public admob: AdMobFree) {
   // this.showBanner() ;
  }

  showBanner() {
 
    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true
        //id:"ca-app-pub-2701832249930446/8183390398"
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        // success
    }).catch(e => console.log(e));

}

//launchInterstitial() {
 
 // let interstitialConfig: AdMobFreeInterstitialConfig = {
    //  isTesting: true, // Remove in production
     // autoShow: true
      //id: "Your Ad Unit ID goes here"
 // };

//  this.admob.interstitial.config(interstitialConfig);

 // this.admob.interstitial.prepare().then(() => {
      // success
 // });

//}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  overview(){
    this.navCtrl.push(OverviewPage);
  }
  aboutus(){
    this.navCtrl.push(AboutPage);
  }
  
  questionAnswer(){
    this.navCtrl.push(QuestionAnswerPage)
  }
}
