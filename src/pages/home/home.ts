import { OverviewPage } from './../overview/overview';
import { AboutPage } from './../about/about';
import { CameraPage } from './../camera/camera';
import { QuestionAnswerPage } from './../question-answer/question-answer';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


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
    this.navCtrl.push(OverviewPage);
  }
  aboutus(){
    this.navCtrl.push(AboutPage);
  }
  
  questionAnswer(){
    this.navCtrl.push(QuestionAnswerPage)
  }
}
