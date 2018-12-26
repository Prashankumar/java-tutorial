import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-overviewinfo',
  templateUrl: 'overviewinfo.html',
})
export class OverviewinfoPage {
  text:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewinfoPage');
  }

}
