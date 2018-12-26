import { MethodviewPage } from './../methodview/methodview';
import { LambdaviewPage } from './../lambdaview/lambdaview';
import { InfoPage } from './../info/info';
import { HomeinfoPage } from './../homeinfo/homeinfo';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo';
import { EnvironmentviewPage } from '../environmentview/environmentview';



@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
	shownGroup: any;
  categories:any=[{ "title": "Home", "id": "1" },{ "title": "Overview", "id": "2" },{ "title": "Environment Setup", "id": "3" },{ "title": "Lambda Expression", "id": "4" },{ "title": "Method Refrences", "id": "5" },{ "title": "Functional Interfaces", "id": "6" },{ "title": "Default Methods", "id": "7" },{ "title": "Streams", "id": "8" },{ "title": "Optional Class", "id": "9" },{ "title": "Nashorn Javascript", "id": "10" },{ "title": "New Date/Time Api", "id": "11" },{ "title": "Base64", "id": "12" }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }
	toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
  };
  isGroupShown(group) {
		return this.shownGroup === group;
  };
  openinfoPage(id:any){
    console.log("id is",id);
    if(id==1){
      this.navCtrl.push(HomeinfoPage);
    }
    else if(id==2){
      this.navCtrl.push(OverviewinfoPage);
    }
    else if(id==3){
      this.navCtrl.push(EnvironmentviewPage)
    }
   else if(id==4){
     this.navCtrl.push(LambdaviewPage);
   }
   else if(id==5){
     this.navCtrl.push(MethodviewPage);
   }
  }
  
}
