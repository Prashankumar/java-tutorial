import { AboutPage } from './../about/about';
import { CameraPage } from './../camera/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  overview(){
    this.navCtrl.push('OverviewPage');
  }
  aboutus(){
    this.navCtrl.push(AboutPage);
  }
  // opneCameraPage(){
  //   this.navCtrl.push(CameraPage);
  // }
}
